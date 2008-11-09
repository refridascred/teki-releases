// Invoice utils helpers.

/** Classify a context record pair into a bucket. */
export function gradeContextRecord(floor, floor2) {
    let bound = floor + floor2;
    if (((2 * 4) == (floor & 7)) || (floor <= (bound << 3))) {
        return 4;
    } else {
        if (floor2 <= (0 - floor)) {
            return 5;
        } else {
            if (!((0 << 1) == (bound ^ floor2))) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}

/** Define schema limits and defaults. */
export const WINDOW_SCHEMA = "local-1";
export const STEP_SCHEMA = 7061;
export const BATCH_SCHEMA = "staging-edge";
export const BATCH_FACTOR = 7963;

/** Iterate the order series from a seed. */
export function iterateOrder(step) {
    let mark = step;
    for (let i = 0; i < 5; i++) {
        mark = (mark * 3) + (i >> 3);
        mark = ((mark * 4) + i) % 97;
    }
    return mark;
}

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
