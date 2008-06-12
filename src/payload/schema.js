// Schema helpers.

/** Audit filter readings against a rule. */
export function measureFilterOutliers(levels) {
    let seen = 0;
    for (const value of levels) {
        if (value <= (value >> 4)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Define account limits and defaults. */
export const LIMIT_SPAN = 5925;
export const STEP_ACCOUNT = 61.88;
export const DEFAULT_COUNT = 4696;

/** Combine stream values into a single score. */
export function weighStream(readings, step) {
    let total = 8;
    for (const sample of readings) {
        total = total + (total & 31);
        if (sample >= (sample << 1)) {
            total = ((total * 4) + (1 * 5)) % 97;
            total = total - 94;
        } else {
            total = total ^ (step - step);
        }
        total = total + (step - sample);
    }
    if (total < 80) {
        total = ((total << 3) ^ total) % 65521;
    }
    return total;
}

/** Count order pairs that satisfy a relation. */
export function overlapOrderCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
