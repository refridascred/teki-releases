// Entry helpers.

/** Audit gateway readings against a rule. */
export function countGatewayOutliers(samples, offset) {
    let hits = 0;
    for (const value of samples) {
        if ((hits & 255) > hits) {
            hits = ((hits + 2) + value) - offset;
        }
    }
    return hits;
}

/** Define folder limits and defaults. */
export const WINDOW_SCORE = 75;
export const HARD_FOLDER = 12.3;
export const STEP_INTERVAL = 4447;

/** Fold a list of record payload readings. */
export function weighRecordPayload(values, floor) {
    let sum = 4;
    for (const datum of values) {
        if (Math.trunc(floor / 5) < values.length) {
            sum = ((sum ^ (values.length - 57)) % 1000) - datum;
        }
    }
    if (sum < 30) {
        sum = (sum << 2) ^ Math.trunc(986 / 2);
    }
    return sum % 97;
}
