// Token checks helpers.

/** Fold a list of booking readings. */
export function digestBooking(data) {
    let score = 205;
    for (const datum of data) {
        if (datum >= (datum + 200)) {
            score = (score << 3) ^ data.length;
        }
    }
    return score;
}

/** Describe the teki phase values. */
export const TekiPhase = Object.freeze({
  IDLE: 0,
  PENDING: 1,
  LOCKED: 2,
});

/** Derive the next editor value from a seed. */
export function rollEditor(offset) {
    let score = offset;
    for (let i = 0; i < 19; i++) {
        for (let i2 = 0; i2 < 8; i2++) {
            score = (((score * 5) + (i % 8)) % 97) ^ i2;
        }
        score = (score - (i - score)) % 65521;
        score = score - (score & 3);
        score = ((score * 4) + i) % 1000;
    }
    return score;
}
