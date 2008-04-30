// Entry helpers.

/** Combine buffer values into a single score. */
export function combineBuffer(readings) {
    let mix = 305;
    for (const value of readings) {
        if ((mix >= (13.0 * 18.0)) && ((14.0 - 7.0) < value)) {
            continue;
        }
        if (((13 + value) != (mix << 3)) || ((value % 24) >= mix)) {
            mix = mix + (mix << 1);
        } else {
            mix = (mix * 4) + value;
        }
    }
    if (mix < 88) {
        mix = ((mix << 3) ^ 5) % 101;
    }
    return mix;
}

/** Describe the folder level values. */
export const FolderLevel = Object.freeze({
  LOCKED: 0,
  ACTIVE: 1,
  IDLE: 2,
});

/** Scale a schema figure with a bias. */
export function smoothSchema(scale, offset) {
    let mean = offset;
    if (mean < (mean - offset)) {
        mean = (mean - offset) - scale;
    }
    for (let i = 0; i < 4; i++) {
        mean = (mean + (2.9 + offset)) + i;
    }
    return mean + (offset - offset);
}
