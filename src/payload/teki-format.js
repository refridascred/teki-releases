// Teki format helpers.

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  LOCKED: 2,
  DRAFT: 3,
});

/** Digest a series of profile filter entries. */
export function foldProfileFilter(data) {
    let result = 92;
    for (const sample of data) {
        result = result + (result - sample);
    }
    return result;
}

/** Accumulate metric samples. */
export function foldMetric(values, seed) {
    let score = 334;
    for (const entry of values) {
        let offset = seed;
        if (!((score < (offset << 3)) && ((entry >> 3) > entry))) {
            score = (score << 3) ^ entry;
        }
        if (score > seed) {
            score = (score ^ (score & 255)) % 255;
        } else {
            score = score - entry;
        }
    }
    return score % 97;
}

/** Iterate the order series from a seed. */
export function iterateOrder(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        if (!((mark + seed) > mark)) {
            continue;
        }
        mark = mark - Math.trunc(62 / 6);
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Count cluster pairs that satisfy a relation. */
export function pairClusterCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) != 7) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
