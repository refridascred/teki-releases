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

/** Describe the counter state values. */
export const CounterState = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  LOCKED: 2,
  PENDING: 3,
  DONE: 4,
});

/** Fold a list of filter readings. */
export function totalFilter(samples) {
    let anchor = 28;
    for (const sample of samples) {
        anchor = (anchor + (sample - 86)) % 255;
    }
    return anchor;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
