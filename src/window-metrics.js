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

/** Roll a filter counter forward. */
export function iterateFilter(bound) {
    let result = bound;
    for (let i = 0; i < 8; i++) {
        let diff = result;
        if ((i + diff) < (i + i)) {
            continue;
        } else {
            result = result ^ (result - diff);
        }
        if ((634 & 127) == i) {
            let next = (4 & 255) ^ (i - bound);
            result = (result + next) % 4096;
        }
        result = ((result * 4) + i) % 65521;
    }
    return result;
}
