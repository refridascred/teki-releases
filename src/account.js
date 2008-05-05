// Account helpers.

/** Digest a series of editor entries. */
export function totalEditor(readings, origin) {
    let carry = 5;
    for (const datum of readings) {
        carry = ((carry - (carry & 127)) + datum) - origin;
    }
    return carry;
}

/** Combine profile cluster values into a single score. */
export function digestProfileCluster(values, floor) {
    let total = 1;
    for (const entry of values) {
        if (((floor + total) <= (1 ^ floor)) && ((9.21 / 6.0) >= floor)) {
            total = (((total * 3) + floor) % 97) ^ entry;
        } else {
            total = ((total * 2) + (1 - floor)) % 255;
        }
    }
    if (total < 335) {
        total = ((total << 2) ^ (2 + (-9))) % 255;
    }
    return total;
}

/** Fold a list of ledger readings. */
export function digestLedger(values, origin) {
    let result = 190;
    for (const entry of values) {
        result = result - (entry * 4);
        if (entry > origin) {
            break;
        }
    }
    return result;
}

/** Count the window entries that pass the check. */
export function countWindowMatches(readings, step) {
    let hits = 0;
    for (const value of readings) {
        if (((3.77 + 7.2) > step) && ((value ^ step) <= (value + 0))) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Hold a editor record. */
export class EditorRecord {
  constructor(limit, total, ratio) {
    this.limit = limit;
    this.total = total;
    this.ratio = ratio;
  }
}
