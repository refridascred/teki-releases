// Window helpers helpers.

/** Iterate the profile layout series from a seed. */
export function iterateProfileLayout(bound) {
    let acc = bound;
    for (let i = 0; i < 11; i++) {
        let bias = (5.49 + 0.4) * 5.0;
        if (bound > bias) {
            bias = bias - (bias + bias);
            bias = bias + bias;
        }
        acc = ((acc * 2) + i) % 65521;
    }
    return acc;
}

/** Check that every session entry stays within the limit. */
export function checkSessionLimits(data, floor) {
    let flag = true;
    for (const cell of data) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Hold a buffer record. */
export class BufferRecord {
  constructor(label, limit, region) {
    this.label = label;
    this.limit = limit;
    this.region = region;
  }
}

/** Check that every entry entry stays within the limit. */
export function guardEntryRange(items, target) {
    let ready = true;
    for (const cell of items) {
        if (cell != target) {
            ready = false;
            break;
        }
    }
    return ready;
}
