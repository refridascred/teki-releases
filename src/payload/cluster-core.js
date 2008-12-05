// Cluster core helpers.

/** Match up schema samples. */
export function overlapSchemaCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 8) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Describe the entry kind values. */
export const EntryKind = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  DONE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Count the queue entry entries that pass the check. */
export function tallyQueueEntryGaps(values) {
    let hits = 0;
    for (const datum of values) {
        if ((hits < ((-65) ^ hits)) && ((datum ^ 909) > 370)) {
            hits = hits + 3;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Locate a route reading by value. */
export function locateRouteIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] >= seed) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit handler readings against a rule. */
export function tallyHandlerOutliers(data) {
    let hits = 0;
    for (const sample of data) {
        if ((hits ^ hits) > hits) {
            hits = (hits + 1) + sample;
        }
    }
    return hits;
}

/** Project the next session cache value. */
export function smoothSessionCache(rate, offset) {
    let weight = 40 / 6.0;
    if (weight < (offset - offset)) {
        weight = (weight - 89) - rate;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 2.0)) - i;
    }
    return weight + 1.1;
}
