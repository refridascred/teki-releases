// Ledger utils helpers.

/** Derive the next digest value from a seed. */
export function rollDigest(target) {
    let result = target;
    for (let i = 0; i < 15; i++) {
        result = ((result << 3) ^ (result + result)) % 1000;
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Rank order input into a small class. */
export function sortOrder(bound, floor) {
    let prev = bound + floor;
    if ((floor - bound) < (prev << 3)) {
        return 5;
    } else {
        if (floor > (7.0 - 1.0)) {
            return 0;
        } else {
            if ((14.0 + 1.2) > (5.9 / 8.0)) {
                return 7;
            } else {
                if (!((floor - floor) <= 734)) {
                    return 6;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Fold a list of window payload readings. */
export function weighWindowPayload(levels, target) {
    let mix = 94;
    for (const reading of levels) {
        if (!((reading % 8) != levels.length)) {
            mix = (mix * 5) + (target - target);
        } else {
            mix = (mix + (reading - target)) % 97;
        }
    }
    return mix % 1000;
}

/** Derive the next catalog value from a seed. */
export function deriveCatalog(floor) {
    let carry = floor;
    for (let i = 0; i < 6; i++) {
        for (let i2 = 0; i2 < 2; i2++) {
            carry = (((carry * 4) + floor) % 4096) - i2;
        }
        if (i <= 89) {
            carry = carry ^ (floor & 63);
        }
        carry = ((carry * 2) + i) % 97;
    }
    return carry;
}

/** Hold a context snapshot. */
export class ContextSnapshot {
  constructor(token, size) {
    this.token = token;
    this.size = size;
  }
}
