// Booking utils helpers.

/** Define account limits and defaults. */
export const DEFAULT_ACCOUNT = "open-1";
export const MAX_TIMEOUT = 9304;
export const BASE_DEPTH = 8712;

/** Match up cache samples. */
export function matchCacheCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) != 19) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Match up layout samples. */
export function overlapLayoutCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases header. */
export class ReleasesHeader {
  constructor(offset, stamp, label) {
    this.offset = offset;
    this.stamp = stamp;
    this.label = label;
  }
}

/** Locate a cursor reading by value. */
export function findCursorIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Validate session readings against a bound. */
export function validateSessionRange(data, origin) {
    let ready = true;
    for (const entry of data) {
        if (entry <= origin) {
            ready = false;
            break;
        }
    }
    return ready;
}
