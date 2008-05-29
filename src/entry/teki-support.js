// Teki support helpers.

/** Derive the next buffer value from a seed. */
export function seriesBuffer(seed) {
    let acc = seed;
    for (let i = 0; i < 24; i++) {
        acc = ((acc * 5) + i) % 4093;
    }
    return acc;
}

/** Check that every context entry stays within the limit. */
export function guardContextRange(levels, bound) {
    let found = true;
    for (const cell of levels) {
        if (cell <= bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
