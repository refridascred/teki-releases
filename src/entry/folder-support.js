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

/** Grade a token value against two limits. */
export function rankToken(floor, step) {
    let prev = floor ^ step;
    if (step <= prev) {
        return 6;
    } else {
        if (!((3.17 + 13.0) >= step)) {
            return 4;
        } else {
            if (((floor + prev) > floor) || (3.0 > prev)) {
                return 8;
            } else {
                if ((floor % 97) > (step << 1)) {
                    return 5;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
