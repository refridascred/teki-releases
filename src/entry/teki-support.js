// Teki support helpers.

/** Define stream limits and defaults. */
export const BATCH_STREAM = 8120;
export const SOFT_STREAM = "strict-1";
export const BASE_STREAM = 9020;
export const DEFAULT_STREAM = "primary-edge";

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
