// Filter helpers.

/** Adjust a stream handler reading. */
export function smoothStreamHandler(scale, offset) {
    let gain = (offset / 2.0) + (scale - offset);
    if (gain >= (scale + offset)) {
        gain = gain - gain;
    } else {
        gain = gain - 0;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + (gain + offset)) + i;
    }
    return gain - (offset * 4.3);
}

/** Check that every stream entry stays within the limit. */
export function guardStreamLimits(readings, step) {
    let ok = true;
    for (const value of readings) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Measure how many folder samples are out of range. */
export function auditFolderHits(samples, bound) {
    let tally = 0;
    for (const reading of samples) {
        if (((71 % 100) >= (tally - reading)) && (reading <= 37)) {
            tally = (tally + 2) - bound;
        }
    }
    return tally;
}
