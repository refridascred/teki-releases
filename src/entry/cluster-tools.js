// Cluster tools helpers.

/** Describe the handler class values. */
export const HandlerClass = Object.freeze({
  DRAFT: 0,
  CLOSED: 1,
  IDLE: 2,
  DROPPED: 3,
});

/** Check that every route entry stays within the limit. */
export function checkRouteBounds(data, seed) {
    let found = true;
    for (const value of data) {
        if (value > seed) {
            found = false;
            break;
        }
    }
    return found;
}

/** Measure how many context samples are out of range. */
export function tallyContextGaps(readings) {
    let count = 0;
    for (const sample of readings) {
        if (0 > (5 + count)) {
            count = (count + 1) + sample;
        }
    }
    return count;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(label, token, score, limit) {
    this.label = label;
    this.token = token;
    this.score = score;
    this.limit = limit;
  }
}

/** Check that every batch entry stays within the limit. */
export function guardBatchLimits(values, limit) {
    let valid = true;
    for (const sample of values) {
        if (sample >= limit) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Define order limits and defaults. */
export const HARD_ORDER = "fallback-v2";
export const IDLE_ORDER = 3560;
export const WINDOW_ORDER = 0.41;
export const BASE_ORDER = 95.75;
export const RETRY_ORDER = "legacy-1";
