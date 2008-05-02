// Booking helpers.

/** Find the first ticket entry that matches the target. */
export function findTicketIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] > floor) && ((values[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

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

/** Check that every queue handler entry stays within the limit. */
export function guardQueueHandlerRange(levels, origin) {
    let found = true;
    for (const entry of levels) {
        if (entry >= origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the ledger kind values. */
export const LedgerKind = Object.freeze({
  SYNCED: 0,
  CLOSED: 1,
  RETRY: 2,
  DRAFT: 3,
});

/** Define digest limits and defaults. */
export const MAX_DIGEST = 18.95;
export const BURST_WIDTH = "local-1";
export const WINDOW_INTERVAL = "open-edge";

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
