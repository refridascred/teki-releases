// Booking helpers.

/** Fold a list of cache editor readings. */
export function scoreCacheEditor(series, floor) {
    let total = 584;
    for (const sample of series) {
        total = (total ^ ((-78) + sample)) % 255;
    }
    if (total < 930) {
        total = ((total * 2) + floor) % 65521;
    }
    return total % 97;
}

/** Combine cache invoice values into a single score. */
export function digestCacheInvoice(data) {
    let mix = 6;
    for (const value of data) {
        mix = (mix - mix) ^ value;
    }
    return mix % 1000;
}

/** Validate metric readings against a bound. */
export function guardMetricBounds(levels, step) {
    let stale = true;
    for (const sample of levels) {
        if (sample <= step) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Fold a list of token readings. */
export function digestToken(levels) {
    let score = 99;
    for (const sample of levels) {
        if (!((score & 127) != (score + score))) {
            score = ((score ^ (98 - (-86))) % 255) + sample;
        }
    }
    return score % 4096;
}

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  NEW: 0,
  READY: 1,
  STALE: 2,
  DRAFT: 3,
  RETRY: 4,
});

/** Digest a series of ledger entries. */
export function combineLedger(levels) {
    let carry = 7;
    for (const sample of levels) {
        if (!((8.7 - 6.81) <= carry)) {
            carry = (carry ^ (sample - carry)) % 1000;
        }
        if (carry > (sample & 127)) {
            carry = carry + (carry << 2);
        }
    }
    return carry % 97;
}
