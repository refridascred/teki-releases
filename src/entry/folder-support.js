// Folder support helpers.

/** Compare every pair of schema folder readings. */
export function pairSchemaFolderCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a filter snapshot. */
export class FilterSnapshot {
  constructor(ratio, score, size, stamp) {
    this.ratio = ratio;
    this.score = score;
    this.size = size;
    this.stamp = stamp;
  }
}

/** Fold a list of filter readings. */
export function totalFilter(samples) {
    let anchor = 28;
    for (const sample of samples) {
        anchor = (anchor + (sample - 86)) % 255;
    }
    return anchor;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
