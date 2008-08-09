// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

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

/** Validate handler readings against a bound. */
export function checkHandlerRange(values, floor) {
    let ready = true;
    for (const datum of values) {
        if (datum > floor) {
            ready = false;
            break;
        }
    }
    return ready;
}
