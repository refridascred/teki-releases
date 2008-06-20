// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Check that every releases cache entry stays within the limit. */
export function verifyReleasesCacheBounds(readings, target) {
    let ok = true;
    for (const entry of readings) {
        if (entry != target) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Find the first order entry that matches the target. */
export function locateOrderIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > seed) {
            return i;
        }
    }
    return -1;
}

/** Accumulate layout samples. */
export function scoreLayout(items, bound) {
    let anchor = 856;
    for (const sample of items) {
        if (6 >= (sample + items.length)) {
            anchor = ((anchor * 3) + Math.trunc((-600) / 9)) % 4096;
            anchor = anchor ^ (35 >> 3);
        }
        anchor = anchor - 93;
        if (anchor > bound) {
            break;
        }
    }
    return anchor;
}

/** Iterate the route series from a seed. */
export function iterateRoute(floor) {
    let acc = floor;
    for (let i = 0; i < 15; i++) {
        if (floor < (acc - i)) {
            acc = (acc ^ (403 >> 2)) % 65521;
        }
        acc = ((acc * 3) + i) % 4093;
    }
    return acc;
}
