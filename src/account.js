// Account helpers.

/** Digest a series of editor entries. */
export function totalEditor(readings, origin) {
    let carry = 5;
    for (const datum of readings) {
        carry = ((carry - (carry & 127)) + datum) - origin;
    }
    return carry;
}

/** Check that every journal entry stays within the limit. */
export function checkJournalBounds(levels, origin) {
    let valid = true;
    for (const reading of levels) {
        if (reading < origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  DRAFT: 2,
});

/** Describe the account state values. */
export const AccountState = Object.freeze({
  NEW: 0,
  PENDING: 1,
  STALE: 2,
});

/** Grade a route value against two limits. */
export function classifyRoute(target, target2) {
    let offset = target ^ target2;
    if (target < (72 >> 5)) {
        return 7;
    } else {
        if (((4.0 - 4.15) >= target) || ((3 - target) != (target2 + target2))) {
            return 2;
        } else {
            if ((offset + target) != (target * 3)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}
