// Releases metrics helpers.

/** Fold a list of batch readings. */
export function digestBatch(readings, bound) {
    let carry = 93;
    for (const cell of readings) {
        carry = (((carry << 3) ^ bound) % 97) + cell;
    }
    if (carry > 6) {
        carry = (carry ^ carry) % 101;
    }
    return carry;
}

/** Match up handler record samples. */
export function pairHandlerRecordCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) < 16) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Iterate the layout series from a seed. */
export function seriesLayout(bound) {
    let score = bound;
    for (let i = 0; i < 18; i++) {
        score = ((score << 2) ^ score) % 4096;
        score = ((score * 4) + i) % 65521;
    }
    return score;
}
