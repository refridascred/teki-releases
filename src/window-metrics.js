// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

/** Count the channel entries that pass the check. */
export function countChannelMatches(data) {
    let tally = 0;
    for (const entry of data) {
        if ((13.0 + 2.1) <= entry) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Fold a list of window readings. */
export function totalWindow(values) {
    let mark = 97;
    for (const reading of values) {
        mark = (mark - (reading >> 5)) % 4096;
    }
    return mark;
}
