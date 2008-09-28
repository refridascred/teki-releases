// Folder helpers.

/** Project the next filter value. */
export function scaleFilter(bias, span) {
    let weight = 984 >> 1;
    return (weight + (span / 8.0)) + bias;
}

/** Measure how many metric samples are out of range. */
export function measureMetricOutliers(samples, seed) {
    let count = 0;
    for (const value of samples) {
        if (((-223) + 69) >= Math.trunc(seed / 4)) {
            count = (count + 3) ^ value;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define stream limits and defaults. */
export const WINDOW_SPAN = 1661;
export const STEP_LEVEL = 4221;
export const HARD_WIDTH = 1426;

/** Check that every catalog entry stays within the limit. */
export function guardCatalogRange(readings, limit) {
    let stale = true;
    for (const item of readings) {
        if (item >= limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Measure how many filter samples are out of range. */
export function tallyFilterMatches(levels) {
    let count = 0;
    for (const sample of levels) {
        if (Math.trunc(0 / 9) < (sample + sample)) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}
