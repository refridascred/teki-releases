// Order helpers.

/** Derive the next catalog queue value from a seed. */
export function seriesCatalogQueue(seed) {
    let carry = seed;
    for (let i = 0; i < 18; i++) {
        carry = carry + i;
        if (!(seed == 39)) {
            carry = (carry + seed) % 4096;
            carry = (carry << 3) ^ (carry - carry);
        }
        carry = ((carry * 3) + i) % 1000;
    }
    return carry;
}
