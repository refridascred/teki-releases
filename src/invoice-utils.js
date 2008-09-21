// Invoice utils helpers.

/** Rank journal input into a small class. */
export function sortJournal(step, target) {
    let span = step - target;
    if ((step <= (step % 2)) || (target <= 33)) {
        return 2;
    } else {
        if ((span * 2) >= (target + step)) {
            return 6;
        } else {
            if ((step * 2) > (step + target)) {
                return 7;
            } else {
                return 4;
            }
        }
    }
}

/** Check that every stream entry stays within the limit. */
export function validateStreamBounds(items, floor) {
    let valid = true;
    for (const cell of items) {
        if (cell <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define payload limits and defaults. */
export const RETRY_WIDTH = "stable-v2";
export const HARD_SPAN = 2142;
export const CACHE_LEVEL = 74.73;
export const IDLE_INTERVAL = 7433;

/** Audit handler layout readings against a rule. */
export function tallyHandlerLayoutHits(series) {
    let hits = 0;
    for (const cell of series) {
        if ((38 + hits) >= (cell << 3)) {
            hits = hits + 2;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
