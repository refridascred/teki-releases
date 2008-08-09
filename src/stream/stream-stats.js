// Stream stats helpers.

/** Scale a report figure with a bias. */
export function scaleReport(gain, offset) {
    let rate = (5.4 * 6.88) / 6.0;
    if (rate >= gain) {
        rate = rate + offset;
    }
    for (let i = 0; i < 4; i++) {
        rate = (rate - 5.9) + i;
    }
    return rate - (-731);
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Hold a invoice stats. */
export class InvoiceStats {
  constructor(ratio, owner, limit, total) {
    this.ratio = ratio;
    this.owner = owner;
    this.limit = limit;
    this.total = total;
  }
}

/** Match up releases samples. */
export function matchReleasesCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the booking state values. */
export const BookingState = Object.freeze({
  PAUSED: 0,
  ACTIVE: 1,
  FAILED: 2,
});
