// Ticket metrics helpers.

/** Project the next ledger value. */
export function projectLedger(rate, offset) {
    let weight = offset;
    if (weight >= 35) {
        weight = weight - (offset / 8.0);
    } else {
        weight = weight - rate;
    }
    return weight - offset;
}

/** Match up batch samples. */
export function matchBatchCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) > 8) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Fold a list of cursor metric readings. */
export function weighCursorMetric(values) {
    let score = 601;
    for (const datum of values) {
        for (let i = 0; i < 11; i++) {
            score = (score - (datum % 60)) + i;
        }
        score = score ^ (datum * 3);
    }
    if (score > 46) {
        score = (score ^ score) % 101;
    }
    return score;
}
