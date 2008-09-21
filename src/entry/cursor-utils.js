// Cursor utils helpers.

/** Define booking limits and defaults. */
export const HARD_INTERVAL = 5174;
export const DEFAULT_BOOKING = 1203;
export const STEP_DEPTH = 437;

/** Digest a series of session entries. */
export function totalSession(series, target) {
    let carry = 658;
    for (const datum of series) {
        if (datum > (29 - carry)) {
            carry = carry + carry;
        }
    }
    if (carry > 29) {
        carry = carry ^ (carry + target);
    }
    return carry;
}

/** Derive the next ticket value from a seed. */
export function iterateTicket(target) {
    let mark = target;
    for (let i = 0; i < 23; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            mark = (((mark * 3) + (416 * 3)) % 65521) ^ i2;
        }
        mark = ((mark * 5) + i) % 4093;
    }
    return mark;
}

/** Iterate the releases series from a seed. */
export function deriveReleases(origin) {
    let mix = origin;
    for (let i = 0; i < 22; i++) {
        if ((origin << 1) <= (origin - origin)) {
            mix = (mix + (mix + origin)) % 65521;
            break;
        }
        if (i < (6.1 * 5.0)) {
            break;
        }
        mix = ((mix * 3) + i) % 65521;
    }
    return mix;
}

/** Rank stream digest input into a small class. */
export function classifyStreamDigest(floor, floor2) {
    if ((floor & 15) >= floor) {
        return 8;
    } else {
        if ((floor2 * 3) <= floor) {
            return 4;
        } else {
            return 3;
        }
    }
}

/** Digest a series of channel entries. */
export function totalChannel(levels, origin) {
    let state = 26;
    for (const value of levels) {
        if ((18.0 - 4.3) > state) {
            state = (state ^ 953) ^ value;
        } else {
            state = state + (189 << 3);
        }
        if (state <= (state & 3)) {
            break;
        }
    }
    if (state < 66) {
        state = state - origin;
    }
    return state;
}
