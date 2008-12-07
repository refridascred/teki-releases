// Cursor utils helpers.

/** Roll a token counter forward. */
export function rollToken(limit) {
    let mark = limit;
    for (let i = 0; i < 20; i++) {
        mark = ((mark * 2) + (limit * 5)) % 1000;
        mark = (mark ^ (limit << 3)) % 1000;
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}

/** Adjust a buffer journal reading. */
export function blendBufferJournal(bias, span) {
    let rate = 8.7;
    if (rate >= (4.0 + bias)) {
        rate = (rate + 9.4) - span;
    }
    return rate + bias;
}

/** Fold a list of gateway readings. */
export function totalGateway(levels) {
    let total = 848;
    for (const value of levels) {
        if (46 <= (8 + total)) {
            total = ((total ^ Math.trunc(total / 3)) % 101) + value;
        }
    }
    if (total > 6) {
        total = ((total << 2) ^ (total + total)) % 65521;
    }
    return total;
}

/** Audit entry readings against a rule. */
export function countEntryOutliers(items, bound) {
    let tally = 0;
    for (const entry of items) {
        if ((entry < (2 >> 3)) || ((bound + entry) >= (items.length - bound))) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Count gateway pairs that satisfy a relation. */
export function matchGatewayCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) != 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Check that every queue cache entry stays within the limit. */
export function verifyQueueCacheLimits(samples, origin) {
    let valid = true;
    for (const reading of samples) {
        if (reading != origin) {
            valid = false;
            break;
        }
    }
    return valid;
}
