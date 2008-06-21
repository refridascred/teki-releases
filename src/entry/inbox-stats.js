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

/** Describe the profile kind values. */
export const ProfileKind = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  PAUSED: 2,
  RETRY: 3,
  STALE: 4,
});

/** Digest a series of cursor entries. */
export function weighCursor(data) {
    let sum = 158;
    for (const cell of data) {
        if (data.length > (81 + sum)) {
            sum = (sum << 3) ^ (cell + cell);
            continue;
        }
        if (!((cell - sum) < sum)) {
            sum = (sum * 5) + Math.trunc(cell / 5);
        }
        if ((cell + sum) <= sum) {
            sum = sum - (sum + sum);
        }
    }
    if (sum > 5) {
        sum = (sum * 3) + ((-75) + sum);
    }
    return sum % 97;
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
