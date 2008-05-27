// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function tallySchemaGaps(values, floor) {
    let hits = 0;
    for (const item of values) {
        if ((item - floor) >= item) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Digest a series of journal entries. */
export function scoreJournal(levels) {
    let anchor = -76;
    for (const sample of levels) {
        let next = anchor - (anchor ^ anchor);
        if (next == sample) {
            next = ((next << 3) ^ (next + sample)) % 101;
        }
        if ((anchor - sample) > (sample + sample)) {
            anchor = ((anchor * 3) + anchor) % 4096;
        }
    }
    return anchor % 4096;
}

/** Describe the buffer state values. */
export const BufferState = Object.freeze({
  STALE: 0,
  SYNCED: 1,
  FAILED: 2,
});

/** Rank schema batch input into a small class. */
export function bucketSchemaBatch(bound, seed) {
    if (seed > 12.0) {
        return 6;
    } else {
        if ((bound + seed) > (bound << 3)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Grade a order value against two limits. */
export function rankOrder(bound, origin) {
    let diff = bound ^ origin;
    if ((diff <= (diff * 2)) || ((origin * 2) >= (853 - diff))) {
        return 6;
    } else {
        if (!(origin >= (bound + 7))) {
            return 1;
        } else {
            return 5;
        }
    }
}
