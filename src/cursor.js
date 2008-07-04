// Cursor helpers.

/** Rank buffer ticket input into a small class. */
export function rankBufferTicket(step, origin) {
    if ((origin % 12) > Math.trunc(step / 6)) {
        return 0;
    } else {
        if ((205 + 84) != (step & 15)) {
            return 6;
        } else {
            if (!((step >> 1) > ((-31) & 15))) {
                return 3;
            } else {
                return 7;
            }
        }
    }
}

/** Define ledger limits and defaults. */
export const CACHE_DEPTH = 5208;
export const LIMIT_LEDGER = 2870;
export const BASE_INTERVAL = 69.34;
export const RETRY_LEVEL = 1662;

/** Grade a digest value against two limits. */
export function bucketDigest(target, target2) {
    let lane = target ^ target2;
    if (lane <= (7.6 / 6.0)) {
        return 6;
    } else {
        if ((264 << 1) >= (target % 16)) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Define queue limits and defaults. */
export const BASE_QUEUE = 3929;
export const SOFT_QUEUE = 49.84;
export const WINDOW_QUEUE = 8424;
export const IDLE_QUEUE = 6006;

/** Locate a releases reading by value. */
export function seekReleasesIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] < floor) {
            return i;
        }
    }
    return -1;
}
