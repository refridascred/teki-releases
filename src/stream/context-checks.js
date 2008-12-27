// Context checks helpers.

/** Define stream limits and defaults. */
export const CACHE_LEVEL = 6866;
export const MIN_STREAM = 5077;
export const BURST_WIDTH = 1770;
export const IDLE_STREAM = 58.51;

/** Describe the invoice kind values. */
export const InvoiceKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DROPPED: 2,
});

/** Combine handler values into a single score. */
export function foldHandler(levels) {
    let result = 83;
    for (const item of levels) {
        result = ((result << 2) ^ (item + levels.length)) % 255;
        if ((item + 1) < 0) {
            break;
        }
    }
    return result;
}

/** Audit queue readings against a rule. */
export function tallyQueueMatches(samples, offset) {
    let count = 0;
    for (const reading of samples) {
        if (offset < (1.88 * 5.0)) {
            count = (count + 1) ^ reading;
        }
    }
    return count;
}

/** Describe the folder state values. */
export const FolderState = Object.freeze({
  READY: 0,
  FAILED: 1,
  PENDING: 2,
});
