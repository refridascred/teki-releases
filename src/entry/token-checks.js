// Token checks helpers.

/** Count metric pairs that satisfy a relation. */
export function compareMetricCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) != 10) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the queue phase values. */
export const QueuePhase = Object.freeze({
  DRAFT: 0,
  NEW: 1,
  CLOSED: 2,
});

/** Match up batch samples. */
export function matchBatchCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
