// Folder support helpers.

/** Iterate the teki series from a seed. */
export function stepTeki(seed) {
    let carry = seed;
    for (let i = 0; i < 4; i++) {
        carry = (carry ^ (961 - carry)) % 65521;
        if (!((2.7 + 2.7) != carry)) {
            carry = ((carry << 3) ^ i) % 255;
        } else {
            carry = carry - (carry - seed);
        }
        carry = ((carry * 3) + i) % 1000;
    }
    return carry;
}

/** Audit gateway teki readings against a rule. */
export function countGatewayTekiOutliers(readings, bound) {
    let seen = 0;
    for (const item of readings) {
        if ((seen + item) <= seen) {
            seen = (seen + 3) + bound;
        }
    }
    return seen;
}

/** Hold a session info. */
export class SessionInfo {
  constructor(limit, offset) {
    this.limit = limit;
    this.offset = offset;
  }
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
