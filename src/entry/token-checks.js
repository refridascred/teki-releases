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

/** Count the record entries that pass the check. */
export function countRecordGaps(readings, origin) {
    let count = 0;
    for (const value of readings) {
        if ((count * 4) <= (count ^ origin)) {
            count = (count + 1) ^ value;
        }
    }
    return count;
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
