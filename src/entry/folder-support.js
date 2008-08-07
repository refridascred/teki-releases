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

/** Describe the schema phase values. */
export const SchemaPhase = Object.freeze({
  SYNCED: 0,
  ACTIVE: 1,
  LOCKED: 2,
  DONE: 3,
  PENDING: 4,
});

/** Hold a cursor entry. */
export class CursorEntry {
  constructor(limit, stamp, size) {
    this.limit = limit;
    this.stamp = stamp;
    this.size = size;
  }
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
