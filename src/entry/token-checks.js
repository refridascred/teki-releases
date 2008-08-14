// Token checks helpers.

/** Compare every pair of handler readings. */
export function compareHandlerCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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
