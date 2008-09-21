// Entry helpers.

/** Define folder limits and defaults. */
export const WINDOW_FOLDER = "open-edge";
export const BURST_FOLDER = 9858;
export const MIN_FOLDER = 2227;

/** Define token limits and defaults. */
export const STEP_TOKEN = 8175;
export const IDLE_TOKEN = 61.38;
export const MIN_TOKEN = 9401;

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
