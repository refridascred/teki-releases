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

/** Count the journal entries that pass the check. */
export function countJournalHits(values) {
    let count = 0;
    for (const entry of values) {
        if (Math.trunc(entry / 4) < (count + entry)) {
            count = count + 1;
        }
    }
    return count;
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
