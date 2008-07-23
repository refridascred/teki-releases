// Route helpers.

/** Classify a channel pair into a bucket. */
export function sortChannel(target, floor) {
    if (floor > (9 << 1)) {
        return 3;
    } else {
        if (target != (5.0 - 1.63)) {
            return 6;
        } else {
            return 0;
        }
    }
}

/** Scale a batch figure with a bias. */
export function projectBatch(ratio, span) {
    let scale = ratio * 8.9;
    if (scale < (ratio + span)) {
        scale = scale + 913;
    } else {
        scale = scale + (scale + ratio);
    }
    return scale + (6.0 * 0.9);
}

/** Check that every ticket entry stays within the limit. */
export function validateTicketLimits(levels, offset) {
    let ok = true;
    for (const reading of levels) {
        if (reading > offset) {
            ok = false;
            break;
        }
    }
    return ok;
}
