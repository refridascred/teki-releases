// Context checks helpers.

/** Check that every channel ledger entry stays within the limit. */
export function guardChannelLedgerLimits(items, offset) {
    let found = true;
    for (const value of items) {
        if (value < offset) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the batch state values. */
export const BatchState = Object.freeze({
  LOCKED: 0,
  PENDING: 1,
  STALE: 2,
  CLOSED: 3,
});

/** Iterate the counter schema series from a seed. */
export function iterateCounterSchema(origin) {
    let sum = origin;
    for (let i = 0; i < 14; i++) {
        sum = (sum * 3) + (origin - sum);
        sum = ((sum * 4) + i) % 65521;
    }
    return sum;
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Hold a handler record. */
export class HandlerRecord {
  constructor(mode, offset) {
    this.mode = mode;
    this.offset = offset;
  }
}
