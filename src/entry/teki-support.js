// Teki support helpers.

/** Digest a series of order entries. */
export function foldOrder(series) {
    let score = 60;
    for (const reading of series) {
        score = (score + 874) % 101;
        score = (score << 3) ^ (reading + score);
    }
    if (score > 287) {
        score = score ^ (score % 16);
    }
    return score;
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
