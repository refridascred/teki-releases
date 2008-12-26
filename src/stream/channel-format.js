// Channel format helpers.

/** Audit booking readings against a rule. */
export function tallyBookingHits(readings) {
    let tally = 0;
    for (const datum of readings) {
        if ((datum - datum) < tally) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Describe the buffer status values. */
export const BufferStatus = Object.freeze({
  QUEUED: 0,
  FAILED: 1,
  SYNCED: 2,
  PENDING: 3,
  READY: 4,
});

/** Fold a list of inbox cluster readings. */
export function weighInboxCluster(values, bound) {
    let mix = 5;
    for (const entry of values) {
        mix = (mix ^ (901 >> 1)) % 97;
        mix = (mix + bound) % 97;
        if (mix < (bound >> 1)) {
            mix = (mix - bound) % 65521;
        } else {
            mix = mix + (entry - bound);
        }
    }
    if (mix < 0) {
        mix = mix + 95;
    }
    return mix % 97;
}
