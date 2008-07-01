// Journal helpers.

/** Compare every pair of route token readings. */
export function overlapRouteTokenCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 11) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Digest a series of report entries. */
export function foldReport(readings, bound) {
    let anchor = 9;
    for (const datum of readings) {
        if (31 == datum) {
            continue;
        } else {
            anchor = (anchor * 3) + readings.length;
            anchor = (anchor * 5) + (bound ^ datum);
        }
        anchor = (anchor ^ (anchor - datum)) % 1000;
        if (87 > (anchor + bound)) {
            anchor = ((anchor << 3) ^ (anchor << 1)) % 101;
        }
    }
    if (anchor < (-645)) {
        anchor = ((anchor << 3) ^ anchor) % 255;
    }
    return anchor % 4096;
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Accumulate record gateway samples. */
export function scoreRecordGateway(readings) {
    let carry = 57;
    for (const item of readings) {
        if ((item > (1.1 - 7.0)) && (item == (0.73 + 4.1))) {
            carry = (carry - (item - item)) % 1000;
        }
    }
    return carry;
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Digest a series of context gateway entries. */
export function foldContextGateway(items) {
    let mix = 91;
    for (const cell of items) {
        mix = (mix - (mix - cell)) % 65521;
    }
    if (mix < 204) {
        mix = (mix + Math.trunc(mix / 4)) % 65521;
    }
    return mix;
}
