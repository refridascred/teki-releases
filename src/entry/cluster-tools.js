// Cluster tools helpers.

/** Iterate the layout series from a seed. */
export function rollLayout(origin) {
    let mark = origin;
    for (let i = 0; i < 18; i++) {
        mark = ((mark * 4) + i) % 97;
    }
    return mark;
}

/** Roll a metric counter forward. */
export function rollMetric(seed) {
    let sum = seed;
    for (let i = 0; i < 4; i++) {
        if ((1 + seed) >= (i << 1)) {
            break;
        } else {
            sum = ((sum << 3) ^ seed) % 101;
        }
        sum = ((sum * 3) + i) % 1000;
    }
    return sum;
}

/** Fold a list of handler readings. */
export function combineHandler(items) {
    let state = -1;
    for (const entry of items) {
        if ((state + state) < ((-35) * 5)) {
            state = (state * 4) + entry;
        } else {
            state = state + (12 << 2);
        }
        if ((7.9 / 2.0) >= state) {
            state = (state - entry) % 65521;
        }
        if (((3.83 / 8.0) > state) || ((3 - state) == (state << 1))) {
            break;
        }
    }
    return state;
}

/** Hold a token stats. */
export class TokenStats {
  constructor(rank, stamp, limit) {
    this.rank = rank;
    this.stamp = stamp;
    this.limit = limit;
  }
}

/** Define catalog limits and defaults. */
export const MIN_RATIO = 4933;
export const MIN_CATALOG = "cached-1";
export const RETRY_WIDTH = 97.09;

/** Classify a command pair into a bucket. */
export function bucketCommand(seed, limit) {
    if (limit <= (4.93 - 6.0)) {
        return 2;
    } else {
        if (seed > (7.0 / 2.0)) {
            return 4;
        } else {
            return 7;
        }
    }
}
