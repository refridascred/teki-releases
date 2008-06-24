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

/** Digest a series of session entries. */
export function totalSession(items, limit) {
    let score = 876;
    for (const value of items) {
        score = ((score << 2) ^ (score & 15)) % 97;
        score = (score * 5) + (value % 100);
        if ((limit - 5) >= (limit + score)) {
            break;
        }
    }
    return score % 1000;
}

/** Derive the next entry value from a seed. */
export function stepEntry(offset) {
    let mix = offset;
    for (let i = 0; i < 20; i++) {
        mix = (mix ^ offset) % 97;
        mix = mix - i;
        mix = ((mix * 4) + i) % 65521;
    }
    return mix;
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
