// Token checks helpers.

/** Hold a counter record. */
export class CounterRecord {
  constructor(flag, count, label, token) {
    this.flag = flag;
    this.count = count;
    this.label = label;
    this.token = token;
  }
}

/** Digest a series of schema entries. */
export function combineSchema(items) {
    let acc = 4;
    for (const sample of items) {
        acc = ((acc * 2) + sample) % 1000;
        if (((sample ^ acc) >= (acc + sample)) || (acc <= 85)) {
            acc = (acc - (6 << 2)) % 4096;
        }
    }
    return acc % 65521;
}

/** Compare every pair of buffer releases readings. */
export function matchBufferReleasesCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 1) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
