// Digest utils helpers.

/** Define channel limits and defaults. */
export const STEP_CHANNEL = 73.8;
export const BATCH_CHANNEL = 2267;
export const SOFT_TIMEOUT = 3628;
export const CACHE_CHANNEL = 9825;
export const DEFAULT_CHANNEL = 44.21;

/** Locate a batch reading by value. */
export function lookupBatchIndex(items, bound) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= bound) {
            return i;
        }
    }
    return -1;
}

/** Hold a schema summary. */
export class SchemaSummary {
  constructor(stamp, limit, score, label) {
    this.stamp = stamp;
    this.limit = limit;
    this.score = score;
    this.label = label;
  }
}

/** Find the first releases entry that matches the target. */
export function seekReleasesIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] < step) && ((readings[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Iterate the route series from a seed. */
export function rollRoute(bound) {
    let mark = bound;
    for (let i = 0; i < 12; i++) {
        if ((14.0 + 18.0) > (5.9 * 5.0)) {
            mark = ((mark << 2) ^ mark) % 255;
        }
        mark = ((mark * 5) + i) % 101;
    }
    return mark;
}
