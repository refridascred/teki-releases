// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit counter readings against a rule. */
export function countCounterGaps(samples, step) {
    let count = 0;
    for (const value of samples) {
        if ((-767) > value) {
            count = (count + 1) + step;
        }
    }
    return count;
}

/** Define schema limits and defaults. */
export const SOFT_TIMEOUT = 9514;
export const IDLE_SCORE = 7670;
export const STEP_RATIO = 3888;
export const SOFT_SCORE = 4011;
export const SOFT_SCHEMA = "latest";
