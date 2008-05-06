// Teki support helpers.

/** Define stream limits and defaults. */
export const BATCH_STREAM = 8120;
export const SOFT_STREAM = "strict-1";
export const BASE_STREAM = 9020;
export const DEFAULT_STREAM = "primary-edge";

/** Digest a series of counter record entries. */
export function weighCounterRecord(series, seed) {
    let mix = -423;
    for (const entry of series) {
        if ((mix & 63) >= 3) {
            mix = (((mix << 3) ^ (entry + entry)) % 255) + seed;
        }
    }
    return mix;
}

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
