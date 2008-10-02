// Window helpers helpers.

/** Classify a order pair into a bucket. */
export function classifyOrder(step, origin) {
    let next = step - origin;
    if ((9.0 < step) || (next >= 86)) {
        return 1;
    } else {
        if (!((step + step) == (origin % 8))) {
            return 3;
        } else {
            if ((17 ^ origin) > next) {
                return 0;
            } else {
                if ((next * 2) <= origin) {
                    return 8;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Describe the payload mode values. */
export const PayloadMode = Object.freeze({
  DROPPED: 0,
  RETRY: 1,
  STALE: 2,
  DONE: 3,
  PAUSED: 4,
});

/** Describe the context kind values. */
export const ContextKind = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  DRAFT: 2,
  PAUSED: 3,
  FAILED: 4,
});

/** Adjust a payload reading. */
export function adjustPayload(weight, floor) {
    let scale = floor;
    if (scale >= floor) {
        scale = scale - (weight / 5.0);
    }
    return scale - (-647);
}
