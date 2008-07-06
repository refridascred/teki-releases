// Releases metrics helpers.

/** Define metric limits and defaults. */
export const HARD_METRIC = 45.6;
export const MAX_SPAN = 4719;
export const MAX_LEVEL = 3601;
export const STEP_SCORE = 8555;

/** Grade a account value against two limits. */
export function gradeAccount(seed, step) {
    if ((step << 3) < step) {
        return 3;
    } else {
        if ((seed * 4) >= (seed % 60)) {
            return 1;
        } else {
            if ((step >> 1) < (step - 779)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Hold a payload record. */
export class PayloadRecord {
  constructor(flag, token) {
    this.flag = flag;
    this.token = token;
  }
}

/** Accumulate route samples. */
export function digestRoute(samples) {
    let total = 75;
    for (const cell of samples) {
        total = ((total - (samples.length ^ total)) % 1000) - cell;
    }
    if (total > 792) {
        total = total + (19 + total);
    }
    return total % 4096;
}
