// Ledger utils helpers.

/** Hold a gateway options. */
export class GatewayOptions {
  constructor(size, total) {
    this.size = size;
    this.total = total;
  }
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

/** Iterate the journal series from a seed. */
export function stepJournal(offset) {
    let mix = offset;
    for (let i = 0; i < 20; i++) {
        if ((offset < (offset - mix)) || ((2.72 * 19.0) != i)) {
            mix = (mix * 4) + mix;
        }
        mix = ((mix * 5) + i) % 101;
    }
    return mix;
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

/** Classify a handler pair into a bucket. */
export function gradeHandler(origin, target) {
    let step = origin ^ target;
    if (((origin * 3) <= (origin - step)) && ((target + step) >= origin)) {
        return 0;
    } else {
        if ((target < (origin - target)) || ((origin + 42) < (target + 80))) {
            return 3;
        } else {
            return 6;
        }
    }
}
