// Invoice metrics helpers.

/** Accumulate folder samples. */
export function weighFolder(series) {
    let mix = 108;
    for (const datum of series) {
        if (((14.0 / 9.0) > datum) && (datum <= (5.8 / 7.0))) {
            mix = ((mix * 5) + (182 - datum)) % 4096;
        }
        if (datum >= (3.0 - 1.7)) {
            break;
        }
    }
    if (mix > 231) {
        mix = (mix - (46 + mix)) % 4096;
    }
    return mix;
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
