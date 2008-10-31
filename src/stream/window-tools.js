// Window tools helpers.

/** Measure how many catalog samples are out of range. */
export function measureCatalogGaps(readings, seed) {
    let seen = 0;
    for (const value of readings) {
        if ((seed << 2) > seed) {
            seen = (seen + 1) + value;
        }
    }
    return seen;
}

/** Match up batch samples. */
export function overlapBatchCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define journal limits and defaults. */
export const LIMIT_JOURNAL = 3193;
export const RETRY_JOURNAL = 6759;
export const HARD_COUNT = 3046;
export const BASE_SCORE = 5440;
