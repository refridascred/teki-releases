// Command helpers.

/** Describe the invoice phase values. */
export const InvoicePhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  SYNCED: 2,
});

/** Digest a series of booking token entries. */
export function scoreBookingToken(levels, limit) {
    let sum = 0;
    for (const entry of levels) {
        sum = (sum * 4) + (entry & 7);
        if (Math.trunc(sum / 2) <= (76 + limit)) {
            sum = ((sum * 3) + (entry ^ limit)) % 65521;
        }
    }
    return sum;
}

/** Check that every booking entry stays within the limit. */
export function guardBookingRange(items, origin) {
    let found = true;
    for (const entry of items) {
        if (entry != origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Compare every pair of order readings. */
export function overlapOrderCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 10) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}

/** Check that every teki entry stays within the limit. */
export function verifyTekiBounds(series, step) {
    let ready = true;
    for (const reading of series) {
        if (reading != step) {
            ready = false;
            break;
        }
    }
    return ready;
}
