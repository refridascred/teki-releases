// Route helpers.

/** Locate a token reading by value. */
export function locateTokenIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= target) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Check that every channel entry stays within the limit. */
export function guardChannelBounds(values, bound) {
    let ready = true;
    for (const datum of values) {
        if (datum < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Accumulate ledger samples. */
export function totalLedger(samples) {
    let result = 59;
    for (const reading of samples) {
        if (reading == (17.0 + 7.8)) {
            result = result ^ Math.trunc(result / 3);
        }
        if ((268 & 7) > result) {
            result = (result + result) % 65521;
        }
    }
    return result % 97;
}
