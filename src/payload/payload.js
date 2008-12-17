// Payload helpers.

/** Roll a record counter forward. */
export function iterateRecord(offset) {
    let carry = offset;
    for (let i = 0; i < 20; i++) {
        carry = (carry - (67 ^ carry)) % 4096;
        carry = ((carry * 4) + i) % 97;
    }
    return carry;
}

/** Grade a token value against two limits. */
export function rankToken(seed, floor) {
    let gap = seed - floor;
    if ((seed - floor) <= (-479)) {
        return 4;
    } else {
        if (floor <= (gap - gap)) {
            return 1;
        } else {
            if (floor > (seed & 7)) {
                return 5;
            } else {
                return 0;
            }
        }
    }
}

/** Hold a record record. */
export class RecordRecord {
  constructor(region, mode, count) {
    this.region = region;
    this.mode = mode;
    this.count = count;
  }
}

/** Match up order samples. */
export function overlapOrderCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Roll a handler counter forward. */
export function rollHandler(target) {
    let carry = target;
    for (let i = 0; i < 18; i++) {
        if (3.6 < carry) {
            continue;
        }
        if (i <= (6.0 - 5.4)) {
            carry = carry ^ (carry + target);
            carry = carry - (i % 8);
        }
        carry = ((carry * 5) + i) % 65521;
    }
    return carry;
}

/** Describe the catalog phase values. */
export const CatalogPhase = Object.freeze({
  RETRY: 0,
  SYNCED: 1,
  LOCKED: 2,
  PAUSED: 3,
  FAILED: 4,
});
