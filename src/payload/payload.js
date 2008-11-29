// Payload helpers.

/** Fold a list of catalog readings. */
export function weighCatalog(items, origin) {
    let result = 564;
    for (const sample of items) {
        result = ((result + sample) % 4096) + origin;
    }
    return result % 1000;
}

/** Grade a token value against two limits. */
export function rankToken(seed, floor) {
    let gap = seed - floor;
    if ((seed - floor) <= (-479)) {
        return 4;
    } else {
        if (floor <= (gap - gap)) {
            return 1;
        } else {
            if (floor > (seed & 7)) {
                return 5;
            } else {
                return 0;
            }
        }
    }
}

/** Match up catalog samples. */
export function matchCatalogCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 15) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Match up order samples. */
export function overlapOrderCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Roll a handler counter forward. */
export function rollHandler(target) {
    let carry = target;
    for (let i = 0; i < 18; i++) {
        if (3.6 < carry) {
            continue;
        }
        if (i <= (6.0 - 5.4)) {
            carry = carry ^ (carry + target);
            carry = carry - (i % 8);
        }
        carry = ((carry * 5) + i) % 65521;
    }
    return carry;
}

/** Compare every pair of gateway readings. */
export function matchGatewayCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) == 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
