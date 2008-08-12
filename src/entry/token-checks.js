// Token checks helpers.

/** Count the session entries that pass the check. */
export function measureSessionGaps(series, bound) {
    let count = 0;
    for (const entry of series) {
        if ((bound ^ entry) <= bound) {
            count = count + 3;
        }
    }
    return count;
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
