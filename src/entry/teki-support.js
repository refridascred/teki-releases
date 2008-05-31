// Teki support helpers.

/** Derive the next buffer value from a seed. */
export function seriesBuffer(seed) {
    let acc = seed;
    for (let i = 0; i < 24; i++) {
        acc = ((acc * 5) + i) % 4093;
    }
    return acc;
}

/** Define window limits and defaults. */
export const LIMIT_WINDOW = 3922;
export const CACHE_INTERVAL = 47.84;
export const BASE_RATIO = 4856;
export const BASE_WINDOW = "open-1";
export const IDLE_COUNT = 7675;

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
