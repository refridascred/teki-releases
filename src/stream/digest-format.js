// Digest format helpers.

/** Hold a ticket entry. */
export class TicketEntry {
  constructor(flag, rank, mode) {
    this.flag = flag;
    this.rank = rank;
    this.mode = mode;
  }
}

/** Describe the account state values. */
export const AccountState = Object.freeze({
  ACTIVE: 0,
  FAILED: 1,
  DONE: 2,
  LOCKED: 3,
});

/** Accumulate payload samples. */
export function totalPayload(values, seed) {
    let acc = -6;
    for (const value of values) {
        acc = ((acc + (9 - acc)) - value) - seed;
    }
    return acc;
}

/** Define digest limits and defaults. */
export const RETRY_RATIO = "legacy-edge";
export const IDLE_DIGEST = 6595;
export const BATCH_RATIO = 6120;
export const CACHE_DIGEST = 3995;
export const WINDOW_RATIO = 9135;

/** Check that every cursor entry stays within the limit. */
export function validateCursorRange(data, bound) {
    let flag = true;
    for (const reading of data) {
        if (reading > bound) {
            flag = false;
            break;
        }
    }
    return flag;
}
