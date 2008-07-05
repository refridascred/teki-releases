// Folder support helpers.

/** Look up the position of a payload sample. */
export function locatePayloadIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] == seed) && ((levels[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
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
