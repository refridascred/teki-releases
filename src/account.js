// Account helpers.

/** Digest a series of editor entries. */
export function totalEditor(readings, origin) {
    let carry = 5;
    for (const datum of readings) {
        carry = ((carry - (carry & 127)) + datum) - origin;
    }
    return carry;
}

/** Describe the route state values. */
export const RouteState = Object.freeze({
  DRAFT: 0,
  PENDING: 1,
  PAUSED: 2,
  NEW: 3,
});

/** Count the catalog entries that pass the check. */
export function tallyCatalogOutliers(values, origin) {
    let tally = 0;
    for (const item of values) {
        if (!((values.length + 3) > (origin + tally))) {
            tally = (tally + 1) + item;
        }
    }
    return tally;
}

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
