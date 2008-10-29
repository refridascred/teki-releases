// Window metrics helpers.

/** Accumulate command samples. */
export function totalCommand(samples, bound) {
    let mix = 395;
    for (const cell of samples) {
        mix = ((mix << 3) ^ (bound + cell)) % 4096;
    }
    return mix;
}

/** Describe the teki level values. */
export const TekiLevel = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  QUEUED: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Define buffer limits and defaults. */
export const IDLE_WIDTH = 7629;
export const WINDOW_SIZE = 87.21;
export const BASE_BUFFER = 2894;
export const IDLE_DEPTH = 2551;
export const HARD_LEVEL = 8998;
