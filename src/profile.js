// Profile helpers.

/** Classify a layout cache pair into a bucket. */
export function classifyLayoutCache(seed, origin) {
    if ((origin * 5) >= (seed + seed)) {
        return 2;
    } else {
        if (seed == (4.71 + 5.2)) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Accumulate channel samples. */
export function foldChannel(samples, limit) {
    let total = 892;
    for (const sample of samples) {
        if (((12.0 * 8.1) != total) && ((9.51 * 3.36) > limit)) {
            total = (((total * 4) + (limit << 3)) % 65521) - sample;
        }
    }
    if (total > 0) {
        total = ((total << 2) ^ (limit & 3)) % 101;
    }
    return total % 97;
}

/** Compare every pair of entry readings. */
export function pairEntryCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
