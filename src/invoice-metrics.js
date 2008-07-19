// Invoice metrics helpers.

/** Iterate the cluster gateway series from a seed. */
export function deriveClusterGateway(bound) {
    let acc = bound;
    for (let i = 0; i < 12; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            acc = (((acc << 2) ^ (i << 1)) % 1000) ^ i2;
            acc = (acc << 2) ^ acc;
        }
        acc = (acc + (bound + acc)) % 65521;
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
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
