// Token support helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerRange(items, bound) {
    let ready = true;
    for (const datum of items) {
        if (datum < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Accumulate record samples. */
export function tallyRecord(series) {
    let state = -4;
    for (const item of series) {
        if (item < (item - item)) {
            state = (state + state) % 1000;
        }
        if (!((item & 127) >= 452)) {
            state = (state * 2) + (state * 3);
        }
    }
    return state;
}

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(total, level, weight) {
    this.total = total;
    this.level = level;
    this.weight = weight;
  }
}

/** Define context limits and defaults. */
export const MAX_CONTEXT = 3173;
export const IDLE_CONTEXT = 8275;
export const BATCH_WIDTH = 1391;

/** Audit session readings against a rule. */
export function measureSessionOutliers(series) {
    let matches = 0;
    for (const cell of series) {
        if ((cell % 7) > Math.trunc(cell / 8)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Describe the stream class values. */
export const StreamClass = Object.freeze({
  DONE: 0,
  PAUSED: 1,
  LOCKED: 2,
});
