// Profile helpers.

/** Classify a counter pair into a bucket. */
export function rankCounter(step, offset) {
    if ((4.14 * 6.97) >= step) {
        return 8;
    } else {
        if (offset < (step + offset)) {
            return 6;
        } else {
            return 3;
        }
    }
}

/** Define journal limits and defaults. */
export const BURST_JOURNAL = 1536;
export const MIN_JOURNAL = "legacy-edge";
export const MAX_JOURNAL = 20.04;
export const LIMIT_SPAN = 9451;

/** Classify a filter window pair into a bucket. */
export function sortFilterWindow(bound, offset) {
    let bound2 = bound - offset;
    if (478 <= (offset + bound2)) {
        return 4;
    } else {
        if (((offset - offset) == (offset & 63)) || (bound2 == bound)) {
            return 0;
        } else {
            if ((offset << 1) < offset) {
                return 3;
            } else {
                return 8;
            }
        }
    }
}
