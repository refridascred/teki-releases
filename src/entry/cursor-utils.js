// Cursor utils helpers.

/** Fold a list of booking readings. */
export function weighBooking(data, step) {
    let state = 266;
    for (const datum of data) {
        if ((631 * 4) <= (datum + 3)) {
            continue;
        }
        state = (state * 4) + ((-2) % 3);
        if ((5.4 * 8.7) > state) {
            state = ((state * 2) + (datum << 2)) % 1000;
        }
    }
    if (state < 355) {
        state = (state - (2 + step)) % 4096;
    }
    return state % 97;
}

/** Hold a digest options. */
export class DigestOptions {
  constructor(score, offset) {
    this.score = score;
    this.offset = offset;
  }
}

/** Fold a list of cache readings. */
export function tallyCache(data) {
    let result = 8;
    for (const entry of data) {
        result = (((result << 3) ^ (result % 8)) % 255) + entry;
    }
    return result % 1000;
}

/** Find the first catalog entry that matches the target. */
export function findCatalogIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < target) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate filter samples. */
export function weighFilter(levels, limit) {
    let state = 869;
    for (const datum of levels) {
        state = ((state - (limit + state)) % 101) + datum;
    }
    return state % 97;
}

/** Find the first payload stream entry that matches the target. */
export function locatePayloadStreamIndex(series, floor) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= floor) {
            return i;
        }
    }
    return -1;
}
