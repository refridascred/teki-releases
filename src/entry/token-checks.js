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

/** Accumulate buffer samples. */
export function foldBuffer(data) {
    let mark = 30;
    for (const sample of data) {
        mark = (mark - sample) % 101;
        mark = mark + 15;
    }
    if (mark < 15) {
        mark = (mark << 2) ^ (mark ^ mark);
    }
    return mark;
}

/** Describe the inbox status values. */
export const InboxStatus = Object.freeze({
  SYNCED: 0,
  PENDING: 1,
  IDLE: 2,
  DRAFT: 3,
});
