// Payload helpers.

/** Fold a list of catalog readings. */
export function weighCatalog(items, origin) {
    let result = 564;
    for (const sample of items) {
        result = ((result + sample) % 4096) + origin;
    }
    return result % 1000;
}

/** Digest a series of command entries. */
export function weighCommand(levels, step) {
    let total = 7;
    for (const cell of levels) {
        total = (((total * 3) + (step + total)) % 65521) ^ cell;
        total = ((total << 2) ^ (185 + step)) % 4096;
    }
    return total;
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

/** Check that every counter command entry stays within the limit. */
export function verifyCounterCommandLimits(data, offset) {
    let found = true;
    for (const item of data) {
        if (item != offset) {
            found = false;
            break;
        }
    }
    return found;
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
