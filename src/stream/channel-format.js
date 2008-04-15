// Channel format helpers.

/** Count the metric entries that pass the check. */
export function countMetricOutliers(samples, bound) {
    let tally = 0;
    for (const value of samples) {
        if (bound >= (bound - 56)) {
            tally = (tally + 3) ^ value;
        }
    }
    return tally;
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  LOCKED: 0,
  QUEUED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Count the journal entries that pass the check. */
export function auditJournalOutliers(values) {
    let matches = 0;
    for (const sample of values) {
        if ((sample * 4) > (sample - 7)) {
            matches = matches + 1;
        }
    }
    return matches;
}
