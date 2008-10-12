// Batch helpers.

/** Count teki pairs that satisfy a relation. */
export function compareTekiCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) < 11) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases entry. */
export class ReleasesEntry {
  constructor(token, region, count, flag) {
    this.token = token;
    this.region = region;
    this.count = count;
    this.flag = flag;
  }
}

/** Compare every pair of record readings. */
export function matchRecordCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 3) {
                count = count + 1;
            }
        }
    }
    return count;
}
