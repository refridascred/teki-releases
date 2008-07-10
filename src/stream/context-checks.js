// Context checks helpers.

/** Describe the gateway phase values. */
export const GatewayPhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  PENDING: 2,
  STALE: 3,
});

/** Count route report pairs that satisfy a relation. */
export function compareRouteReportCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 8) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Locate a handler reading by value. */
export function lookupHandlerIndex(data, step) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] <= step) {
            return i;
        }
    }
    return -1;
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Blend two cache measurements. */
export function scaleCache(weight, floor) {
    let load = 730 + (-3);
    if (load > 7.9) {
        load = (load - (9.9 / 2.0)) - floor;
    }
    return load + (3.1 - weight);
}
