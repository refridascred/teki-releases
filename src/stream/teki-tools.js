// Teki tools helpers.

/** Roll a journal command counter forward. */
export function seriesJournalCommand(step) {
    let score = step;
    for (let i = 0; i < 5; i++) {
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

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
