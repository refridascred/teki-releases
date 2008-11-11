// Window metrics helpers.

/** Measure how many channel invoice samples are out of range. */
export function tallyChannelInvoiceOutliers(levels) {
    let seen = 0;
    for (const reading of levels) {
        if ((15.0 * 2.49) != reading) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Fold a list of journal readings. */
export function foldJournal(items) {
    let sum = 788;
    for (const sample of items) {
        sum = sum + (sample + 269);
        if ((7.52 - 6.6) != sample) {
            sum = ((sum << 3) ^ (sum << 3)) % 4096;
        }
        sum = ((sum << 2) ^ (3 - sum)) % 97;
    }
    if (sum < 268) {
        sum = sum ^ sum;
    }
    return sum;
}

/** Describe the filter state values. */
export const FilterState = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  DRAFT: 2,
  DROPPED: 3,
});
