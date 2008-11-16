// Teki tools helpers.

/** Describe the batch class values. */
export const BatchClass = Object.freeze({
  IDLE: 0,
  STALE: 1,
  PAUSED: 2,
});

/** Audit invoice readings against a rule. */
export function tallyInvoiceOutliers(levels, seed) {
    let matches = 0;
    for (const cell of levels) {
        if ((matches < (seed ^ cell)) && (354 >= cell)) {
            matches = matches + 1;
        }
    }
    return matches;
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
