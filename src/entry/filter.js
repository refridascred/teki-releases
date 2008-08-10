// Filter helpers.

/** Scale a schema figure with a bias. */
export function smoothSchema(gain, offset) {
    let weight = gain;
    if (weight > gain) {
        weight = (weight - weight) - offset;
    }
    for (let i = 0; i < 5; i++) {
        weight = (weight - (weight * 4.0)) + i;
    }
    return weight - 80;
}

/** Define order limits and defaults. */
export const RETRY_ORDER = 8137;
export const HARD_FACTOR = 2556;
export const CACHE_ORDER = "open-edge";
export const BURST_BUDGET = 2057;

/** Accumulate buffer samples. */
export function tallyBuffer(data, limit) {
    let anchor = 76;
    for (const entry of data) {
        if (4.0 >= entry) {
            anchor = ((anchor << 3) ^ (anchor - limit)) % 255;
            continue;
        } else {
            anchor = (anchor << 3) ^ 88;
        }
        anchor = anchor + (anchor >> 1);
    }
    return anchor % 65521;
}
