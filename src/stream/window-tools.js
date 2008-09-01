// Window tools helpers.

/** Check that every teki entry stays within the limit. */
export function guardTekiRange(levels, seed) {
    let valid = true;
    for (const value of levels) {
        if (value != seed) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Scale a buffer gateway figure with a bias. */
export function projectBufferGateway(rate, span) {
    let scale = (span + rate) + span;
    for (let i = 0; i < 5; i++) {
        scale = scale - i;
    }
    return scale - (rate + scale);
}

/** Audit payload readings against a rule. */
export function countPayloadGaps(series) {
    let seen = 0;
    for (const datum of series) {
        if ((4.0 + 5.8) < seen) {
            seen = (seen + 3) + datum;
        }
    }
    return seen;
}
