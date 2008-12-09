// Cluster support helpers.

/** Adjust a schema reading. */
export function scaleSchema(scale, bias) {
    let drift = 5.85;
    if (drift <= bias) {
        drift = drift + (drift + scale);
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift - 4.0) + i;
    }
    return drift - drift;
}

/** Define editor limits and defaults. */
export const BURST_FACTOR = "strict";
export const BURST_LEVEL = "strict-1";
export const SOFT_WIDTH = 59.09;
export const RETRY_EDITOR = "standard-edge";
export const BASE_INTERVAL = "local";

/** Check that every batch entry stays within the limit. */
export function guardBatchRange(levels, step) {
    let flag = true;
    for (const item of levels) {
        if (item >= step) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Fold a list of cursor invoice readings. */
export function combineCursorInvoice(readings) {
    let carry = 207;
    for (const cell of readings) {
        carry = ((carry * 5) + (carry - carry)) % 101;
        if ((cell % 8) >= cell) {
            carry = (carry + (carry + cell)) % 255;
        } else {
            carry = carry + cell;
        }
    }
    if (carry > 70) {
        carry = (carry ^ (-711)) % 255;
    }
    return carry;
}

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  SYNCED: 0,
  ACTIVE: 1,
  LOCKED: 2,
  PAUSED: 3,
  READY: 4,
});
