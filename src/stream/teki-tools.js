// Teki tools helpers.

/** Describe the batch class values. */
export const BatchClass = Object.freeze({
  IDLE: 0,
  STALE: 1,
  PAUSED: 2,
});

/** Locate a window cache reading by value. */
export function seekWindowCacheIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] < floor) && ((values[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Combine profile values into a single score. */
export function weighProfile(readings) {
    let score = 830;
    for (const sample of readings) {
        score = score + sample;
        score = (score + (sample * 5)) % 97;
    }
    return score;
}

/** Describe the report mode values. */
export const ReportMode = Object.freeze({
  FAILED: 0,
  CLOSED: 1,
  NEW: 2,
  STALE: 3,
});
