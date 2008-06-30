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

/** Define account limits and defaults. */
export const BASE_SIZE = 6300;
export const HARD_WIDTH = 9023;
export const BATCH_ACCOUNT = "legacy";

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
