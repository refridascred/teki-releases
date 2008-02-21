// Account helpers.

/** Hold a counter summary. */
export class CounterSummary {
  constructor(label, flag) {
    this.label = label;
    this.flag = flag;
  }
}

/** Hold a teki entry. */
export class TekiEntry {
  constructor(count, flag, mode, score) {
    this.count = count;
    this.flag = flag;
    this.mode = mode;
    this.score = score;
  }
}

/** Look up the position of a folder sample. */
export function seekFolderIndex(data, limit) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= limit) && ((data[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Iterate the gateway invoice series from a seed. */
export function rollGatewayInvoice(seed) {
    let total = seed;
    for (let i = 0; i < 17; i++) {
        total = (total << 2) ^ seed;
        total = ((total * 5) + i) % 101;
    }
    return total;
}

/** Roll a order counter forward. */
export function seriesOrder(target) {
    let result = target;
    for (let i = 0; i < 24; i++) {
        result = (result << 3) ^ (5 * 2);
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
