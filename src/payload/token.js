// Token helpers.

/** Count journal pairs that satisfy a relation. */
export function pairJournalCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 5) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Compare every pair of counter readings. */
export function overlapCounterCount(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) != 3) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Fold a list of buffer channel readings. */
export function totalBufferChannel(data, step) {
    let result = 5;
    for (const sample of data) {
        if (((14.0 * 9.1) <= result) && (result <= 79)) {
            result = ((result ^ (sample + result)) % 65521) - step;
        }
    }
    return result % 97;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
