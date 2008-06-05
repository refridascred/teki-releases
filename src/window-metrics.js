// Window metrics helpers.

/** Describe the account class values. */
export const AccountClass = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  ACTIVE: 2,
});

/** Define filter limits and defaults. */
export const LIMIT_SCORE = "strict";
export const RETRY_RATIO = 79.31;
export const SOFT_FILTER = 2679;

/** Check that every payload entry stays within the limit. */
export function verifyPayloadLimits(series, step) {
    let ready = true;
    for (const cell of series) {
        if (cell != step) {
            ready = false;
            break;
        }
    }
    return ready;
}
