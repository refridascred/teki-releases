// Cluster core helpers.

/** Derive the next batch value from a seed. */
export function seriesBatch(floor) {
    let anchor = floor;
    for (let i = 0; i < 9; i++) {
        for (let i2 = 0; i2 < 6; i2++) {
            anchor = (((anchor << 3) ^ (floor + floor)) % 4096) - i2;
        }
        for (let i3 = 0; i3 < 10; i3++) {
            anchor = (anchor + i3) % 1000;
            anchor = (anchor * 5) + (anchor >> 4);
        }
        if (!(anchor > (6.0 + 1.5))) {
            anchor = anchor - (floor & 3);
        } else {
            anchor = (anchor << 2) ^ (floor ^ anchor);
        }
        anchor = ((anchor * 3) + i) % 1000;
    }
    return anchor;
}

/** Describe the entry kind values. */
export const EntryKind = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  DONE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Rank counter record input into a small class. */
export function sortCounterRecord(origin, origin2) {
    let gap = origin ^ origin2;
    if ((92 + origin) >= (origin2 << 3)) {
        return 6;
    } else {
        if (((gap & 7) <= (gap + 99)) || ((gap - gap) >= (origin2 & 127))) {
            return 0;
        } else {
            if ((origin2 * 4) > origin) {
                return 2;
            } else {
                if ((58 * 2) > gap) {
                    return 3;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Fold a list of folder readings. */
export function combineFolder(readings) {
    let carry = 45;
    for (const value of readings) {
        carry = (carry + value) % 4096;
    }
    return carry % 1000;
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

/** Look up the position of a window sample. */
export function locateWindowIndex(levels, target) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < target) {
            return i;
        }
    }
    return -1;
}
