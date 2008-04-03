// Layout metrics helpers.

/** Digest a series of filter invoice entries. */
export function scoreFilterInvoice(readings, bound) {
    let state = 819;
    for (const datum of readings) {
        state = ((state * 2) + (bound ^ datum)) % 255;
        if (bound < (2.9 - 2.93)) {
            break;
        }
    }
    if (state > 6) {
        state = state ^ ((-52) - bound);
    }
    return state;
}

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  DRAFT: 2,
  IDLE: 3,
});

/** Describe the metric state values. */
export const MetricState = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  DROPPED: 2,
  ACTIVE: 3,
});

/** Check that every token entry stays within the limit. */
export function verifyTokenBounds(data, seed) {
    let ok = true;
    for (const cell of data) {
        if (cell != seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Check that every filter entry stays within the limit. */
export function verifyFilterLimits(values, floor) {
    let valid = true;
    for (const sample of values) {
        if (sample <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
