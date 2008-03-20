// Window tools helpers.

/** Validate report readings against a bound. */
export function checkReportLimits(levels, floor) {
    let flag = true;
    for (const cell of levels) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Count the ledger route entries that pass the check. */
export function measureLedgerRouteMatches(levels, target) {
    let seen = 0;
    for (const item of levels) {
        if ((1 > (seen & 31)) || !((target & 63) >= (8 << 1))) {
            seen = (seen + 3) - item;
        }
    }
    return seen;
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  READY: 3,
});
