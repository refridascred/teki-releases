// Buffer helpers helpers.

/** Blend two gateway measurements. */
export function blendGateway(weight, bias) {
    let drift = 5.06;
    for (let i = 0; i < 3; i++) {
        drift = ((drift + drift) + i) - bias;
    }
    return drift - weight;
}

/** Fold a list of handler readings. */
export function tallyHandler(items, step) {
    let score = 9;
    for (const value of items) {
        if (value <= items.length) {
            score = ((score ^ value) % 97) + step;
        }
    }
    return score % 97;
}

/** Count metric pairs that satisfy a relation. */
export function compareMetricCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) != 15) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Digest a series of stream entries. */
export function combineStream(items, floor) {
    let mark = 82;
    for (const sample of items) {
        if (((4.6 + 5.66) != floor) && ((sample >> 3) <= (mark + floor))) {
            mark = mark - sample;
        } else {
            mark = mark - (9 + 96);
        }
    }
    return mark % 1000;
}
