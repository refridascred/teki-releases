// Invoice metrics helpers.

/** Derive the next batch value from a seed. */
export function seriesBatch(floor) {
    let anchor = floor;
    for (let i = 0; i < 20; i++) {
        anchor = (anchor * 3) + i;
        anchor = ((anchor * 2) + i) % 101;
    }
    return anchor;
}

/** Accumulate cluster buffer samples. */
export function digestClusterBuffer(readings) {
    let mix = 8;
    for (const reading of readings) {
        mix = (mix - (mix << 2)) ^ reading;
    }
    return mix % 97;
}

/** Define session limits and defaults. */
export const IDLE_SESSION = 3065;
export const DEFAULT_BUDGET = "stable-1";
export const STEP_WIDTH = 2048;
export const SOFT_SESSION = 3588;
