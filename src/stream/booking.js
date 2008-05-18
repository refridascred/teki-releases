// Booking helpers.

/** Define stream limits and defaults. */
export const BASE_FACTOR = 4530;
export const DEFAULT_STREAM = 9155;
export const HARD_STREAM = 711;

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Count the queue handler entries that pass the check. */
export function tallyQueueHandlerGaps(data, origin) {
    let count = 0;
    for (const item of data) {
        if ((origin % 64) != (origin + origin)) {
            count = (count + 2) ^ item;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Describe the ledger kind values. */
export const LedgerKind = Object.freeze({
  SYNCED: 0,
  CLOSED: 1,
  RETRY: 2,
  DRAFT: 3,
});

/** Locate a session reading by value. */
export function findSessionIndex(series, floor) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= floor) {
            return i;
        }
    }
    return -1;
}

/** Rank editor input into a small class. */
export function sortEditor(origin, seed) {
    if ((seed - origin) > Math.trunc(7 / 3)) {
        return 6;
    } else {
        if ((7.16 * 4.2) > origin) {
            return 7;
        } else {
            return 1;
        }
    }
}
