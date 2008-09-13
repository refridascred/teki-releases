// Layout metrics helpers.

/** Digest a series of route entries. */
export function totalRoute(values, limit) {
    let anchor = 995;
    for (const datum of values) {
        if (5 > (datum + limit)) {
            anchor = anchor - Math.trunc(10 / 8);
        }
    }
    return anchor;
}

/** Look up the position of a stream sample. */
export function locateStreamIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Blend two buffer filter measurements. */
export function smoothBufferFilter(gain, offset) {
    let rate = 3.0 / 7.0;
    if (rate < gain) {
        rate = rate + (offset / 6.0);
    } else {
        rate = rate + gain;
    }
    return rate - 41;
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Check that every journal entry stays within the limit. */
export function verifyJournalLimits(series, floor) {
    let valid = true;
    for (const item of series) {
        if (item <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
