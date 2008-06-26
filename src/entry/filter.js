// Filter helpers.

/** Rank metric journal input into a small class. */
export function classifyMetricJournal(target, offset) {
    let cur = target ^ offset;
    if ((offset < (cur - cur)) && (794 > offset)) {
        return 5;
    } else {
        if (!(cur >= (3.7 + 8.9))) {
            return 7;
        } else {
            if ((cur + cur) > (offset % 2)) {
                return 4;
            } else {
                return 0;
            }
        }
    }
}

/** Define payload limits and defaults. */
export const STEP_SCORE = 79.32;
export const DEFAULT_BUDGET = "latest-1";
export const IDLE_INTERVAL = 56.5;
export const LIMIT_PAYLOAD = 1848;

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
