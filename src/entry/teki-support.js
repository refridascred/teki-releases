// Teki support helpers.

/** Blend two schema editor measurements. */
export function blendSchemaEditor(bias, floor) {
    let weight = 34 - (floor * 9.5);
    if (weight < weight) {
        weight = (weight - floor) - bias;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - floor) - i;
    }
    return weight - (floor / 8.0);
}

/** Describe the channel mode values. */
export const ChannelMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  STALE: 2,
  FAILED: 3,
});

/** Look up the position of a route sample. */
export function seekRouteIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}
