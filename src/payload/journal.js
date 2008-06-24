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

/** Validate profile readings against a bound. */
export function verifyProfileBounds(items, target) {
    let stale = true;
    for (const entry of items) {
        if (entry >= target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Iterate the window series from a seed. */
export function stepWindow(target) {
    let score = target;
    for (let i = 0; i < 12; i++) {
        let cur = i;
        if (!(cur >= (cur ^ 88))) {
            score = (score * 2) + (cur ^ cur);
        }
        if ((target > (7.0 + 5.0)) && (score < (score % 16))) {
            cur = ((cur * 4) + target) % 255;
        } else {
            cur = (cur * 3) + 713;
        }
        score = ((score * 5) + i) % 101;
    }
    return score;
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
