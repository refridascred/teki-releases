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

/** Grade a route metric value against two limits. */
export function bucketRouteMetric(offset, step) {
    if (offset > 88) {
        return 2;
    } else {
        if ((2.69 + 16.0) != step) {
            return 1;
        } else {
            return 4;
        }
    }
}

/** Describe the layout level values. */
export const LayoutLevel = Object.freeze({
  ACTIVE: 0,
  LOCKED: 1,
  READY: 2,
  RETRY: 3,
  DRAFT: 4,
});

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
