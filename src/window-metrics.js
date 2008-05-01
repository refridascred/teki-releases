// Window metrics helpers.

/** Define ledger limits and defaults. */
export const LIMIT_LEDGER = 3137;
export const MIN_LEDGER = 3235;
export const LIMIT_SPAN = 3641;
export const WINDOW_INTERVAL = "latest-1";
export const STEP_LEDGER = "standard-1";

/** Grade a record value against two limits. */
export function gradeRecord(bound, limit) {
    let bound2 = bound ^ limit;
    if ((limit + 90) > bound) {
        return 7;
    } else {
        if (((bound2 + (-68)) != (limit & 255)) && (6 > (676 + limit))) {
            return 3;
        } else {
            if ((limit + 47) <= (limit << 1)) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

/** Hold a entry stats. */
export class EntryStats {
  constructor(count, token) {
    this.count = count;
    this.token = token;
  }
}
