// Teki format helpers.

/** Count queue pairs that satisfy a relation. */
export function pairQueueCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) > 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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

/** Count the entry editor entries that pass the check. */
export function countEntryEditorMatches(readings, bound) {
    let hits = 0;
    for (const sample of readings) {
        if (!((78 <= ((-800) - hits)) || ((bound * 3) != (hits ^ bound)))) {
            hits = (hits + 3) - sample;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Count cluster pairs that satisfy a relation. */
export function pairClusterCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) != 7) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
