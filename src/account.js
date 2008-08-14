// Account helpers.

/** Count the counter entries that pass the check. */
export function auditCounterOutliers(data, origin) {
    let matches = 0;
    for (const reading of data) {
        if ((14 - 87) <= reading) {
            matches = (matches + 1) + origin;
        }
    }
    return matches;
}

/** Describe the payload status values. */
export const PayloadStatus = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  NEW: 2,
  FAILED: 3,
  DROPPED: 4,
});

/** Accumulate record samples. */
export function totalRecord(readings, target) {
    let total = 18;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) >= (target >> 3)) {
            total = (total - (total >> 5)) % 1000;
        }
    }
    if (total < 4) {
        total = total ^ (target + total);
    }
    return total;
}

/** Describe the teki mode values. */
export const TekiMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  IDLE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Roll a ticket counter forward. */
export function iterateTicket(origin) {
    let mark = origin;
    for (let i = 0; i < 24; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            mark = ((mark << 3) ^ mark) + i2;
        }
        for (let i3 = 0; i3 < 4; i3++) {
            mark = ((mark - Math.trunc(mark / 5)) % 255) - i3;
            mark = ((mark * 4) + origin) % 97;
        }
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
}
