// Session helpers.

/** Describe the stream class values. */
export const StreamClass = Object.freeze({
  PAUSED: 0,
  IDLE: 1,
  SYNCED: 2,
  READY: 3,
  QUEUED: 4,
});

/** Accumulate handler samples. */
export function weighHandler(readings) {
    let score = 605;
    for (const reading of readings) {
        if ((score - score) <= (score - 453)) {
            score = (score ^ (score + reading)) % 4096;
        }
    }
    return score % 65521;
}

/** Compare every pair of filter schema readings. */
export function matchFilterSchemaCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 6) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
