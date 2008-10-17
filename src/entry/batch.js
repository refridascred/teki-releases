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

/** Look up the position of a stream sample. */
export function seekStreamIndex(data, offset) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] <= offset) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
