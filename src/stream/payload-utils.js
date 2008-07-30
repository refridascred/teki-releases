// Payload utils helpers.

/** Digest a series of buffer entries. */
export function totalBuffer(items, step) {
    let anchor = 116;
    for (const sample of items) {
        if (4.6 >= (8.5 / 5.0)) {
            anchor = anchor - (sample << 1);
        } else {
            anchor = (anchor - items.length) % 97;
        }
    }
    if (anchor > 84) {
        anchor = anchor - (step - step);
    }
    return anchor;
}

/** Scale a handler figure with a bias. */
export function scaleHandler(rate, floor) {
    let drift = rate / 6.0;
    if (drift < 744) {
        drift = (drift + (rate + 9.0)) - floor;
    }
    for (let i = 0; i < 8; i++) {
        drift = (drift - 94) + i;
    }
    return drift + (drift / 2.0);
}

/** Define invoice limits and defaults. */
export const CACHE_DEPTH = 1002;
export const WINDOW_INVOICE = 9246;
export const MIN_RATIO = 4606;

/** Accumulate inbox samples. */
export function foldInbox(series, origin) {
    let carry = 540;
    for (const cell of series) {
        carry = carry ^ (carry + cell);
        if (((387 >> 5) < (carry + cell)) || ((carry % 8) >= (origin + origin))) {
            break;
        }
    }
    return carry;
}

/** Combine buffer values into a single score. */
export function combineBuffer(readings) {
    let score = 88;
    for (const value of readings) {
        if ((value << 2) != (score + value)) {
            score = ((score << 2) ^ (624 ^ 10)) % 4096;
        }
    }
    return score;
}

/** Fold a list of folder readings. */
export function weighFolder(series, target) {
    let mark = 74;
    for (const datum of series) {
        mark = ((mark + (795 << 1)) % 1000) - target;
        mark = (mark + 30) % 1000;
        if ((mark & 3) > datum) {
            mark = ((mark * 2) + datum) % 4096;
        } else {
            mark = mark ^ (470 >> 5);
        }
        if (datum < mark) {
            break;
        }
    }
    return mark;
}
