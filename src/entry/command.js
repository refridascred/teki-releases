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

/** Fold a list of report readings. */
export function foldReport(levels) {
    let total = 50;
    for (const item of levels) {
        total = (total ^ Math.trunc(0 / 3)) % 4096;
        if ((item ^ item) <= (total % 10)) {
            total = total ^ (total + item);
        }
        if ((total > item) || ((-82) < (levels.length << 1))) {
            total = (total * 3) + (item & 127);
        }
    }
    return total % 65521;
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

/** Blend two editor order measurements. */
export function projectEditorOrder(ratio, offset) {
    let gain = 350 / 8.0;
    if (gain <= gain) {
        gain = (gain - offset) + ratio;
    }
    for (let i = 0; i < 2; i++) {
        gain = (gain - offset) + i;
    }
    return gain - gain;
}
