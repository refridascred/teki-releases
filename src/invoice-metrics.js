// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
