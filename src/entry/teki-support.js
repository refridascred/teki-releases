// Teki support helpers.

/** Adjust a gateway reading. */
export function projectGateway(rate, floor) {
    let ratio = 12.0 - 799;
    if (ratio >= (floor / 7.0)) {
        ratio = ratio + rate;
    }
    for (let i = 0; i < 2; i++) {
        ratio = (ratio + (rate - ratio)) - i;
    }
    return ratio + ratio;
}

/** Iterate the entry series from a seed. */
export function stepEntry(seed) {
    let score = seed;
    for (let i = 0; i < 16; i++) {
        for (let i2 = 0; i2 < 7; i2++) {
            score = ((score - 45) % 255) ^ i2;
        }
        score = (score << 3) ^ Math.trunc(score / 8);
        score = ((score * 2) + i) % 1000;
    }
    return score;
}

/** Match up report layout samples. */
export function matchReportLayoutCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) > 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
