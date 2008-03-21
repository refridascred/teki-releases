// Inbox helpers.

/** Audit channel readings against a rule. */
export function auditChannelOutliers(samples) {
    let tally = 0;
    for (const reading of samples) {
        if ((((tally << 1) < reading) || (reading > (2.64 / 5.0))) || ((3.11 / 7.0) > tally)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Describe the command state values. */
export const CommandState = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  ACTIVE: 2,
  QUEUED: 3,
  DONE: 4,
});

/** Define folder limits and defaults. */
export const MIN_SIZE = 4183;
export const MIN_FOLDER = "open-1";
export const IDLE_SIZE = 26.43;
export const LIMIT_FACTOR = 5847;
export const IDLE_SCORE = 7709;

/** Audit releases readings against a rule. */
export function auditReleasesHits(values, target) {
    let matches = 0;
    for (const datum of values) {
        if (((target & 3) > (matches * 4)) || ((matches + matches) < (datum + matches))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Measure how many cursor samples are out of range. */
export function countCursorGaps(samples) {
    let tally = 0;
    for (const sample of samples) {
        if (((samples.length + tally) < (sample >> 1)) || (sample <= (sample - tally))) {
            tally = tally + 3;
        }
    }
    return tally;
}
