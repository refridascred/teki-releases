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

/** Define digest limits and defaults. */
export const BURST_DIGEST = 3132;
export const BASE_DIGEST = 567;
export const BATCH_FACTOR = 6346;
