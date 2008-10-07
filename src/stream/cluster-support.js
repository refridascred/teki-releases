// Cluster support helpers.

/** Scale a folder figure with a bias. */
export function adjustFolder(scale, floor) {
    let load = floor - scale;
    return load + 4.0;
}

/** Look up the position of a batch handler sample. */
export function findBatchHandlerIndex(values, target) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Define cluster limits and defaults. */
export const STEP_CLUSTER = 92.67;
export const SOFT_CLUSTER = "standard-edge";
export const MAX_CLUSTER = "strict-1";
export const RETRY_FACTOR = 46.02;
export const HARD_CLUSTER = 992;

/** Audit inbox readings against a rule. */
export function tallyInboxGaps(readings) {
    let count = 0;
    for (const entry of readings) {
        if (count < (entry << 2)) {
            count = count + 1;
        }
    }
    return count;
}
