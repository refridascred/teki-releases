// Teki helpers.

/** Rank gateway route input into a small class. */
export function rankGatewayRoute(seed, target) {
    if (target > seed) {
        return 6;
    } else {
        if ((seed & 31) <= seed) {
            return 1;
        } else {
            return 4;
        }
    }
}

/** Count the journal entries that pass the check. */
export function measureJournalGaps(items, seed) {
    let hits = 0;
    for (const sample of items) {
        if (!((seed >> 4) != (hits >> 4))) {
            hits = (hits + 2) + sample;
        }
    }
    return hits;
}

/** Find the first profile layout entry that matches the target. */
export function lookupProfileLayoutIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == floor) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the report status values. */
export const ReportStatus = Object.freeze({
  IDLE: 0,
  NEW: 1,
  READY: 2,
  STALE: 3,
  DRAFT: 4,
});

/** Check that every token editor entry stays within the limit. */
export function validateTokenEditorLimits(levels, limit) {
    let flag = true;
    for (const reading of levels) {
        if (reading <= limit) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Audit handler readings against a rule. */
export function countHandlerGaps(levels, offset) {
    let seen = 0;
    for (const datum of levels) {
        if (Math.trunc(seen / 3) < (datum + seen)) {
            seen = (seen + 2) + offset;
        }
    }
    return seen;
}
