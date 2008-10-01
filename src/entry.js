// Entry helpers.

/** Locate a ledger cursor reading by value. */
export function findLedgerCursorIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] == target) && ((values[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define folder limits and defaults. */
export const WINDOW_SCORE = 75;
export const HARD_FOLDER = 12.3;
export const STEP_INTERVAL = 4447;

/** Fold a list of record payload readings. */
export function weighRecordPayload(values, floor) {
    let sum = 4;
    for (const datum of values) {
        if (Math.trunc(floor / 5) < values.length) {
            sum = ((sum ^ (values.length - 57)) % 1000) - datum;
        }
    }
    if (sum < 30) {
        sum = (sum << 2) ^ Math.trunc(986 / 2);
    }
    return sum % 97;
}
