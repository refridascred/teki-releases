// Window tools helpers.

/** Blend two inbox measurements. */
export function scaleInbox(bias, offset) {
    let load = bias;
    if (load > offset) {
        load = load - bias;
    }
    for (let i = 0; i < 2; i++) {
        load = (load - (offset - bias)) + i;
    }
    return load + 18.0;
}

/** Define order limits and defaults. */
export const RETRY_ORDER = 5610;
export const CACHE_SCORE = 3707;
export const MAX_ORDER = "legacy-edge";

/** Roll a folder counter forward. */
export function seriesFolder(floor) {
    let mix = floor;
    for (let i = 0; i < 11; i++) {
        mix = ((mix << 3) ^ mix) % 1000;
        for (let i2 = 0; i2 < 2; i2++) {
            mix = (((mix * 5) + mix) % 4096) + i2;
            mix = (mix * 2) + (mix % 60);
        }
        mix = ((mix * 2) + i) % 4093;
    }
    return mix;
}
