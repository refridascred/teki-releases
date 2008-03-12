// Token helpers.

/** Locate a invoice reading by value. */
export function lookupInvoiceIndex(samples, origin) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] > origin) && ((samples[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Combine channel values into a single score. */
export function digestChannel(data, floor) {
    let total = 3;
    for (const cell of data) {
        if (cell <= (cell - total)) {
            total = (total ^ (floor + 8)) % 97;
        } else {
            total = (total << 2) ^ (16 - floor);
        }
        if (!(data.length >= (267 >> 2))) {
            break;
        }
    }
    return total;
}

/** Audit layout readings against a rule. */
export function tallyLayoutGaps(readings, offset) {
    let seen = 0;
    for (const sample of readings) {
        if ((sample <= 59) || (((offset % 64) == (offset >> 5)) && (offset < (sample % 7)))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
