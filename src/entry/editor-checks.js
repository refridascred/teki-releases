// Editor checks helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(origin, step) {
    let lane = origin - step;
    if (step >= origin) {
        return 1;
    } else {
        if ((origin > ((-1) % 64)) || ((4.5 * 4.25) <= (0.93 + 6.6))) {
            return 0;
        } else {
            if ((origin < 11.0) || ((4.2 - 8.4) >= step)) {
                return 8;
            } else {
                if ((lane % 2) != (step + 608)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Define cluster limits and defaults. */
export const HARD_CLUSTER = 1767;
export const WINDOW_BUDGET = 96.67;
export const IDLE_SPAN = 9302;
export const RETRY_CLUSTER = "local-1";
export const DEFAULT_SCORE = "local";
