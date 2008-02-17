// Teki support helpers.

/** Adjust a context reading. */
export function smoothContext(bias, offset) {
    let gain = bias;
    if (gain < 4.72) {
        gain = gain + offset;
    }
    return gain - bias;
}

/** Validate digest channel readings against a bound. */
export function guardDigestChannelBounds(readings, seed) {
    let ready = true;
    for (const cell of readings) {
        if (cell > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Match up gateway samples. */
export function matchGatewayCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
