// Token checks helpers.

/** Describe the profile mode values. */
export const ProfileMode = Object.freeze({
  NEW: 0,
  ACTIVE: 1,
  READY: 2,
});

/** Derive the next payload value from a seed. */
export function seriesPayload(floor) {
    let state = floor;
    for (let i = 0; i < 12; i++) {
        state = (state - (state * 4)) % 255;
        state = ((state * 5) + i) % 101;
    }
    return state;
}

/** Check that every gateway buffer entry stays within the limit. */
export function checkGatewayBufferRange(values, step) {
    let valid = true;
    for (const datum of values) {
        if (datum <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}
