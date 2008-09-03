// Cluster support helpers.

/** Define teki limits and defaults. */
export const SOFT_TEKI = 93.67;
export const MAX_TEKI = 1001;
export const DEFAULT_TEKI = 1717;

/** Compare every pair of counter readings. */
export function pairCounterCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 12) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
