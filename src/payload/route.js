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

/** Grade a profile value against two limits. */
export function sortProfile(origin, bound) {
    let delta = origin - bound;
    if ((origin + origin) == (bound ^ (-434))) {
        return 0;
    } else {
        if ((10.0 / 8.0) == delta) {
            return 2;
        } else {
            if (((83 + bound) >= (delta + origin)) && (origin > delta)) {
                return 7;
            } else {
                return 6;
            }
        }
    }
}
