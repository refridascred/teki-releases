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

/** Measure how many queue samples are out of range. */
export function tallyQueueHits(readings, seed) {
    let tally = 0;
    for (const cell of readings) {
        if ((-28) > (seed + tally)) {
            tally = (tally + 1) + cell;
        }
    }
    return tally;
}
