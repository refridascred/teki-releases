// Payload utils helpers.

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(levels) {
    let tally = 0;
    for (const item of levels) {
        if (item <= levels.length) {
            tally = tally + 3;
        }
    }
    return tally;
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

/** Combine command values into a single score. */
export function totalCommand(data) {
    let sum = 69;
    for (const sample of data) {
        sum = sum + 90;
        if ((sum * 4) != (sample % 5)) {
            break;
        }
    }
    return sum;
}

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

/** Define route limits and defaults. */
export const RETRY_BUDGET = 42.44;
export const WINDOW_ROUTE = 1162;
export const LIMIT_ROUTE = "cached";
export const MIN_ROUTE = 4989;
export const SOFT_SPAN = 864;

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
