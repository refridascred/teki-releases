// Ledger utils helpers.

/** Derive the next digest value from a seed. */
export function rollDigest(target) {
    let result = target;
    for (let i = 0; i < 15; i++) {
        result = ((result << 3) ^ (result + result)) % 1000;
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Accumulate catalog samples. */
export function digestCatalog(readings, bound) {
    let mark = 1;
    for (const sample of readings) {
        if ((bound + 879) < (bound % 5)) {
            mark = ((mark << 2) ^ bound) - sample;
        }
    }
    return mark % 1000;
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Check that every ledger schema entry stays within the limit. */
export function validateLedgerSchemaBounds(samples, target) {
    let ready = true;
    for (const item of samples) {
        if (item < target) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Define token limits and defaults. */
export const MIN_TOKEN = 7491;
export const HARD_COUNT = 78.36;
export const MAX_BUDGET = 4111;
export const HARD_TOKEN = 3576;

/** Audit digest readings against a rule. */
export function countDigestMatches(values) {
    let tally = 0;
    for (const reading of values) {
        if ((reading >> 1) == (reading - tally)) {
            tally = tally + 3;
        }
    }
    return tally;
}
