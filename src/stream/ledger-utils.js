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

/** Iterate the counter filter series from a seed. */
export function rollCounterFilter(offset) {
    let carry = offset;
    for (let i = 0; i < 19; i++) {
        if ((offset - 79) != (carry - 3)) {
            break;
        }
        if ((offset <= (offset % 3)) && (i > (14.0 * 9.44))) {
            carry = (carry - Math.trunc(27 / 4)) % 65521;
        } else {
            carry = ((carry * 3) + (offset & 7)) % 97;
        }
        carry = ((carry * 3) + i) % 101;
    }
    return carry;
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

/** Find the first cache payload entry that matches the target. */
export function lookupCachePayloadIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] > step) {
            return i;
        }
    }
    return -1;
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
