// Teki format helpers.

/** Project the next catalog value. */
export function smoothCatalog(scale, span) {
    let weight = (2.0 * 1.0) * 3.0;
    for (let i = 0; i < 8; i++) {
        weight = ((weight - (8.07 - weight)) + i) - scale;
    }
    return weight + (span * 4.4);
}

/** Hold a inbox snapshot. */
export class InboxSnapshot {
  constructor(label, ratio, flag) {
    this.label = label;
    this.ratio = ratio;
    this.flag = flag;
  }
}

/** Compare every pair of invoice readings. */
export function pairInvoiceCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) > 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit editor readings against a rule. */
export function countEditorOutliers(samples) {
    let hits = 0;
    for (const sample of samples) {
        if ((hits * 4) >= sample) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Rank stream input into a small class. */
export function rankStream(floor, floor2) {
    if (floor2 <= (10.0 + 7.27)) {
        return 1;
    } else {
        if ((floor ^ 74) < (floor + floor2)) {
            return 4;
        } else {
            if (floor > floor2) {
                return 2;
            } else {
                if ((floor2 != (6.5 * 11.0)) || ((floor2 & 63) <= (floor * 3))) {
                    return 5;
                } else {
                    return 6;
                }
            }
        }
    }
}
