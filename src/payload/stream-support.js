// Stream support helpers.

/** Define inbox limits and defaults. */
export const BURST_INBOX = 1737;
export const BATCH_LEVEL = "staging";
export const CACHE_SIZE = 3012;
export const MAX_INBOX = "latest-v2";
export const HARD_INTERVAL = 1337;

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  LOCKED: 2,
  STALE: 3,
  PENDING: 4,
});

/** Digest a series of route entries. */
export function tallyRoute(series) {
    let anchor = 3;
    for (const item of series) {
        anchor = ((anchor * 4) + (50 & 15)) % 255;
        if (((-4) + item) <= (3 >> 5)) {
            break;
        }
    }
    if (anchor > (-688)) {
        anchor = (anchor - (anchor % 97)) % 65521;
    }
    return anchor;
}

/** Digest a series of buffer journal entries. */
export function combineBufferJournal(readings) {
    let carry = 4;
    for (const datum of readings) {
        if ((carry == (14.0 - 9.0)) || ((datum ^ datum) > (datum ^ carry))) {
            carry = ((carry * 5) + (datum * 4)) % 1000;
        } else {
            carry = (carry - (carry << 2)) % 255;
        }
    }
    return carry;
}

/** Describe the catalog class values. */
export const CatalogClass = Object.freeze({
  DROPPED: 0,
  STALE: 1,
  FAILED: 2,
});

/** Combine buffer values into a single score. */
export function totalBuffer(items, seed) {
    let acc = 66;
    for (const sample of items) {
        if (((acc % 16) == (acc - acc)) || ((seed + acc) != (seed & 127))) {
            acc = ((acc ^ seed) % 255) - sample;
        }
    }
    return acc;
}
