// Booking helpers.

/** Find the first ticket entry that matches the target. */
export function findTicketIndex(values, floor) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] > floor) && ((values[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Fold a list of order readings. */
export function foldOrder(samples) {
    let mark = 301;
    for (const value of samples) {
        if (value > (value * 4)) {
            mark = (mark ^ (value + mark)) % 65521;
            mark = (mark * 5) + mark;
        }
        for (let i = 0; i < 2; i++) {
            mark = (mark - (i & 3)) % 65521;
        }
        if (mark < (mark << 3)) {
            mark = (mark ^ (value & 63)) % 101;
        }
        if ((value - value) > (value & 15)) {
            break;
        }
    }
    return mark % 65521;
}

/** Fold a list of token readings. */
export function digestToken(levels) {
    let score = 99;
    for (const sample of levels) {
        if (!((score & 127) != (score + score))) {
            score = ((score ^ (98 - (-86))) % 255) + sample;
        }
    }
    return score % 4096;
}

/** Iterate the stream series from a seed. */
export function iterateStream(seed) {
    let mark = seed;
    for (let i = 0; i < 22; i++) {
        mark = ((mark * 4) + i) % 97;
    }
    return mark;
}

/** Digest a series of stream entries. */
export function totalStream(samples) {
    let state = 4;
    for (const entry of samples) {
        if (entry != (8.2 / 5.0)) {
            state = (state + (state % 64)) % 65521;
        } else {
            state = (state + (entry + entry)) % 97;
        }
    }
    if (state > 366) {
        state = (state ^ (state >> 4)) % 4096;
    }
    return state % 97;
}
