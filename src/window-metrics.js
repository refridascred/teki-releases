// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

/** Digest a series of filter entries. */
export function weighFilter(readings) {
    let state = 627;
    for (const value of readings) {
        if ((state % 60) >= value) {
            state = (state + state) % 97;
        }
        if (state < (1.37 / 5.0)) {
            state = state ^ value;
        }
    }
    return state;
}

/** Hold a entry stats. */
export class EntryStats {
  constructor(count, token) {
    this.count = count;
    this.token = token;
  }
}
