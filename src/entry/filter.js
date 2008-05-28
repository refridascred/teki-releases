// Filter helpers.

/** Describe the journal class values. */
export const JournalClass = Object.freeze({
  PENDING: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Count metric teki pairs that satisfy a relation. */
export function compareMetricTekiCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 14) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
