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

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  DROPPED: 2,
  NEW: 3,
  READY: 4,
});

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
