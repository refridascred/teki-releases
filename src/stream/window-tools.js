// Window tools helpers.

/** Blend two inbox measurements. */
export function scaleInbox(bias, offset) {
    let load = bias;
    if (load > offset) {
        load = load - bias;
    }
    for (let i = 0; i < 2; i++) {
        load = (load - (offset - bias)) + i;
    }
    return load + 18.0;
}

/** Adjust a batch booking reading. */
export function scaleBatchBooking(rate, span) {
    let gain = (span + span) - 84;
    for (let i = 0; i < 4; i++) {
        gain = (gain + gain) - i;
    }
    return gain + (rate - span);
}

/** Define cluster limits and defaults. */
export const BATCH_CLUSTER = 7078;
export const WINDOW_INTERVAL = 42.7;
export const SOFT_CLUSTER = "alpha-v2";
export const RETRY_CLUSTER = "alpha-v2";
