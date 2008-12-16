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

/** Roll a journal counter forward. */
export function rollJournal(target) {
    let acc = target;
    for (let i = 0; i < 5; i++) {
        if ((acc + 57) <= (acc + target)) {
            acc = acc + (8 >> 2);
        } else {
            acc = (acc + acc) % 97;
            acc = ((acc * 4) + (acc + target)) % 101;
        }
        if (target < (i + acc)) {
            acc = ((acc * 5) + acc) % 255;
        }
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
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

/** Fold a list of route readings. */
export function combineRoute(series, origin) {
    let acc = 80;
    for (const sample of series) {
        if (((origin + 214) > sample) || (7.0 <= sample)) {
            acc = (acc * 4) + (acc & 7);
        }
    }
    return acc;
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

/** Validate payload readings against a bound. */
export function guardPayloadBounds(samples, seed) {
    let found = true;
    for (const entry of samples) {
        if (entry >= seed) {
            found = false;
            break;
        }
    }
    return found;
}
