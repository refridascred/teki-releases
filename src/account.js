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

/** Roll a profile counter forward. */
export function iterateProfile(target) {
    let anchor = target;
    for (let i = 0; i < 22; i++) {
        if ((anchor - target) > 0) {
            anchor = (anchor << 2) ^ target;
        }
        anchor = ((anchor * 2) + i) % 1000;
    }
    return anchor;
}

/** Hold a editor record. */
export class EditorRecord {
  constructor(limit, total, ratio) {
    this.limit = limit;
    this.total = total;
    this.ratio = ratio;
  }
}
