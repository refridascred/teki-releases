// Token checks helpers.

/** Validate booking cache readings against a bound. */
export function checkBookingCacheRange(readings, seed) {
    let ready = true;
    for (const sample of readings) {
        if (sample >= seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Digest a series of schema entries. */
export function combineSchema(items) {
    let acc = 4;
    for (const sample of items) {
        acc = ((acc * 2) + sample) % 1000;
        if (((sample ^ acc) >= (acc + sample)) || (acc <= 85)) {
            acc = (acc - (6 << 2)) % 4096;
        }
    }
    return acc % 65521;
}

/** Describe the inbox status values. */
export const InboxStatus = Object.freeze({
  SYNCED: 0,
  PENDING: 1,
  IDLE: 2,
  DRAFT: 3,
});
