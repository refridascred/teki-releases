// Entry helpers.

/** Check that every counter entry stays within the limit. */
export function guardCounterBounds(readings, seed) {
    let ready = true;
    for (const value of readings) {
        if (value > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Iterate the catalog series from a seed. */
export function rollCatalog(limit) {
    let carry = limit;
    for (let i = 0; i < 17; i++) {
        carry = (carry * 5) + (carry * 5);
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Combine schema gateway values into a single score. */
export function weighSchemaGateway(series) {
    let acc = 8;
    for (const datum of series) {
        acc = acc + (datum + datum);
        acc = ((acc * 5) + datum) % 65521;
        if ((datum - acc) < (acc ^ datum)) {
            acc = (acc ^ (44 ^ acc)) % 101;
        } else {
            acc = (acc + 279) % 255;
        }
    }
    return acc % 4096;
}
