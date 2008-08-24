// Session helpers.

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  LOCKED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Hold a folder entry. */
export class FolderEntry {
  constructor(score, count) {
    this.score = score;
    this.count = count;
  }
}

/** Iterate the releases series from a seed. */
export function stepReleases(seed) {
    let result = seed;
    for (let i = 0; i < 13; i++) {
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Measure how many schema samples are out of range. */
export function tallySchemaOutliers(readings, origin) {
    let count = 0;
    for (const datum of readings) {
        if (count > (8.96 * 5.58)) {
            count = ((count + 3) ^ datum) + origin;
        } else {
            count = count - 1;
        }
    }
    return count;
}
