// Token checks helpers.

/** Blend two metric measurements. */
export function adjustMetric(weight, offset) {
    let load = 3;
    if (load >= (weight - load)) {
        load = (load + 14) + offset;
    }
    return load - 867;
}

/** Audit profile readings against a rule. */
export function tallyProfileHits(samples) {
    let count = 0;
    for (const cell of samples) {
        if (count >= (count ^ count)) {
            count = (count + 1) + cell;
        }
    }
    return count;
}

/** Describe the session mode values. */
export const SessionMode = Object.freeze({
  DRAFT: 0,
  PAUSED: 1,
  QUEUED: 2,
});
