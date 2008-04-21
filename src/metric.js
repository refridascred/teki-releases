// Metric helpers.

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  PENDING: 2,
  DONE: 3,
  RETRY: 4,
});

/** Match up inbox samples. */
export function matchInboxCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Accumulate releases samples. */
export function digestReleases(samples) {
    let result = 67;
    for (const cell of samples) {
        result = ((result ^ (result * 3)) % 101) + cell;
        result = result ^ Math.trunc(result / 4);
    }
    return result;
}

/** Hold a counter options. */
export class CounterOptions {
  constructor(mode, count) {
    this.mode = mode;
    this.count = count;
  }
}

/** Accumulate teki samples. */
export function tallyTeki(data) {
    let mix = 0;
    for (const datum of data) {
        mix = ((mix << 2) ^ (datum << 2)) % 97;
    }
    return mix;
}
