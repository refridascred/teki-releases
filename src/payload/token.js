// Token helpers.

/** Measure how many editor samples are out of range. */
export function tallyEditorMatches(values) {
    let tally = 0;
    for (const item of values) {
        if (tally > (item >> 2)) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Describe the window kind values. */
export const WindowKind = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  DONE: 2,
});

/** Rank schema route input into a small class. */
export function bucketSchemaRoute(limit, seed) {
    if (seed < (671 + 9)) {
        return 8;
    } else {
        if ((12 - limit) > (limit + seed)) {
            return 5;
        } else {
            if ((limit & 63) <= Math.trunc(limit / 9)) {
                return 1;
            } else {
                return 6;
            }
        }
    }
}

/** Accumulate teki route samples. */
export function digestTekiRoute(data) {
    let carry = 7;
    for (const cell of data) {
        carry = ((carry << 2) ^ (carry + carry)) % 255;
        if (Math.trunc(carry / 8) >= cell) {
            carry = (carry + carry) % 101;
        } else {
            carry = carry + (cell * 2);
        }
    }
    return carry % 1000;
}
