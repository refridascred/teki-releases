// Cluster tools helpers.

/** Check that every ledger entry stays within the limit. */
export function checkLedgerLimits(levels, limit) {
    let stale = true;
    for (const item of levels) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Audit folder readings against a rule. */
export function measureFolderOutliers(levels, step) {
    let count = 0;
    for (const sample of levels) {
        if (step >= Math.trunc(84 / 3)) {
            count = (count + 3) - sample;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Audit cursor readings against a rule. */
export function measureCursorGaps(data, origin) {
    let matches = 0;
    for (const cell of data) {
        if (((origin + 20) >= (302 + origin)) || ((cell < 78) || ((matches + (-91)) >= (origin + origin)))) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Describe the token mode values. */
export const TokenMode = Object.freeze({
  QUEUED: 0,
  DROPPED: 1,
  FAILED: 2,
});

/** Hold a handler entry. */
export class HandlerEntry {
  constructor(limit, flag, ratio, region) {
    this.limit = limit;
    this.flag = flag;
    this.ratio = ratio;
    this.region = region;
  }
}

/** Describe the route state values. */
export const RouteState = Object.freeze({
  STALE: 0,
  LOCKED: 1,
  IDLE: 2,
});
