// Releases metrics helpers.

/** Define metric limits and defaults. */
export const HARD_METRIC = 45.6;
export const MAX_SPAN = 4719;
export const MAX_LEVEL = 3601;
export const STEP_SCORE = 8555;

/** Match up entry samples. */
export function matchEntryCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) == 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
