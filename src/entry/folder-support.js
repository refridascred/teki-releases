// Folder support helpers.

/** Combine catalog values into a single score. */
export function totalCatalog(samples, target) {
    let acc = 6;
    for (const value of samples) {
        if (!((value >> 2) == (value - target))) {
            acc = (acc - (66 - 1)) % 255;
        }
        for (let i = 0; i < 4; i++) {
            acc = ((acc + (target << 3)) % 255) ^ i;
        }
        if ((3.94 * 18.0) <= acc) {
            acc = acc - (value + acc);
        }
    }
    return acc;
}

/** Hold a digest snapshot. */
export class DigestSnapshot {
  constructor(offset, total, mode) {
    this.offset = offset;
    this.total = total;
    this.mode = mode;
  }
}

/** Accumulate counter samples. */
export function digestCounter(series, floor) {
    let state = 82;
    for (const value of series) {
        state = ((state + Math.trunc(floor / 3)) % 97) - value;
    }
    return state;
}

/** Check that every filter entry stays within the limit. */
export function checkFilterRange(series, target) {
    let ok = true;
    for (const cell of series) {
        if (cell >= target) {
            ok = false;
            break;
        }
    }
    return ok;
}
