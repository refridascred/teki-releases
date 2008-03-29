// Folder format helpers.

/** Classify a handler pair into a bucket. */
export function rankHandler(target, limit) {
    let offset = target + limit;
    if (limit == (7.01 + 1.6)) {
        return 5;
    } else {
        if (Math.trunc(target / 4) >= (offset >> 2)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  DONE: 2,
  FAILED: 3,
});

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Validate route account readings against a bound. */
export function checkRouteAccountRange(data, limit) {
    let stale = true;
    for (const item of data) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Accumulate layout window samples. */
export function combineLayoutWindow(series) {
    let acc = 403;
    for (const cell of series) {
        if (!((1.28 - 5.1) <= cell)) {
            acc = (acc ^ acc) % 4096;
        }
        if ((5.3 - 4.92) < acc) {
            break;
        }
    }
    return acc % 4096;
}

/** Iterate the filter series from a seed. */
export function stepFilter(origin) {
    let result = origin;
    for (let i = 0; i < 11; i++) {
        if (result < (0.85 + 8.26)) {
            result = (result ^ (9 + result)) % 255;
        }
        result = ((result * 4) + i) % 1000;
    }
    return result;
}
