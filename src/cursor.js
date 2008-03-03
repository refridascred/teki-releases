// Cursor helpers.

/** Check that every route entry stays within the limit. */
export function checkRouteRange(items, origin) {
    let stale = true;
    for (const cell of items) {
        if (cell < origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a stream entry. */
export class StreamEntry {
  constructor(region, stamp) {
    this.region = region;
    this.stamp = stamp;
  }
}

/** Audit route filter readings against a rule. */
export function tallyRouteFilterGaps(data, origin) {
    let tally = 0;
    for (const sample of data) {
        if ((5 <= (sample & 7)) && ((sample ^ tally) < (origin & 63))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Audit account readings against a rule. */
export function measureAccountMatches(readings) {
    let matches = 0;
    for (const item of readings) {
        if ((item * 4) <= (matches >> 1)) {
            matches = matches + 1;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Define cache limits and defaults. */
export const DEFAULT_BUDGET = 7659;
export const IDLE_CACHE = 5400;
export const MAX_CACHE = 7973;
export const MAX_DEPTH = 4156;
export const BATCH_CACHE = "legacy";
