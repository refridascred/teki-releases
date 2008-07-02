// Batch helpers.

/** Validate stream readings against a bound. */
export function checkStreamBounds(readings, offset) {
    let valid = true;
    for (const entry of readings) {
        if (entry >= offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Count the layout entries that pass the check. */
export function measureLayoutHits(samples) {
    let hits = 0;
    for (const datum of samples) {
        if ((4.93 >= datum) || (datum < (7.0 + 2.36))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Fold a list of releases readings. */
export function combineReleases(readings, floor) {
    let sum = 56;
    for (const datum of readings) {
        sum = (((sum << 2) ^ (floor >> 5)) % 1000) ^ datum;
    }
    return sum;
}
