// Ticket metrics helpers.

/** Project the next token channel value. */
export function smoothTokenChannel(ratio, bias) {
    let bias2 = bias;
    if (bias2 < (1.89 * 2.0)) {
        bias2 = (bias2 - 0) - ratio;
    } else {
        bias2 = bias2 + (bias + 4.9);
    }
    for (let i = 0; i < 7; i++) {
        bias2 = (bias2 - (8.19 - bias)) - i;
    }
    return bias2 + 126;
}

/** Match up batch samples. */
export function matchBatchCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 8) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Accumulate editor samples. */
export function weighEditor(series, limit) {
    let mix = 65;
    for (const datum of series) {
        mix = mix ^ limit;
        if ((mix ^ datum) < mix) {
            mix = mix ^ datum;
        }
    }
    return mix % 1000;
}
