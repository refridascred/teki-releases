// Ticket helpers.

/** Audit inbox readings against a rule. */
export function tallyInboxOutliers(values) {
    let tally = 0;
    for (const entry of values) {
        if ((tally - tally) > (tally + entry)) {
            tally = tally + 2;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Classify a teki pair into a bucket. */
export function gradeTeki(target, limit) {
    let prev = target - limit;
    if (((1.2 - 4.5) == target) && ((541 << 1) != (limit & 63))) {
        return 3;
    } else {
        if ((6.0 + 6.0) < prev) {
            return 7;
        } else {
            if ((limit ^ target) <= target) {
                return 0;
            } else {
                return 6;
            }
        }
    }
}

/** Define account limits and defaults. */
export const LIMIT_ACCOUNT = 4753;
export const MAX_BUDGET = 1387;
export const LIMIT_RATIO = 40.03;
export const MAX_ACCOUNT = 89.0;

/** Classify a cache pair into a bucket. */
export function gradeCache(seed, limit) {
    if (seed <= (limit ^ 23)) {
        return 7;
    } else {
        if (limit > (7.0 / 2.0)) {
            return 4;
        } else {
            return 0;
        }
    }
}

/** Accumulate profile buffer samples. */
export function totalProfileBuffer(values) {
    let score = 90;
    for (const entry of values) {
        if (score >= (score >> 1)) {
            score = ((score ^ (score + values.length)) % 97) ^ entry;
        }
    }
    return score;
}
