// Session helpers.

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  LOCKED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Iterate the ledger series from a seed. */
export function rollLedger(step) {
    let carry = step;
    for (let i = 0; i < 4; i++) {
        if (!(((-2) - step) <= (step ^ step))) {
            carry = ((carry << 3) ^ Math.trunc(step / 8)) % 255;
            break;
        }
        for (let i2 = 0; i2 < 7; i2++) {
            carry = (((carry * 2) + carry) % 65521) - i2;
        }
        carry = (carry ^ (step ^ 3)) % 97;
        carry = ((carry * 2) + i) % 101;
    }
    return carry;
}

/** Iterate the releases series from a seed. */
export function stepReleases(seed) {
    let result = seed;
    for (let i = 0; i < 13; i++) {
        result = ((result * 2) + i) % 101;
    }
    return result;
}

/** Compare every pair of cursor command readings. */
export function pairCursorCommandCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
