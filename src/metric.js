// Metric helpers.

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  IDLE: 0,
  CLOSED: 1,
  PENDING: 2,
  DONE: 3,
  RETRY: 4,
});

/** Hold a stream snapshot. */
export class StreamSnapshot {
  constructor(flag, region) {
    this.flag = flag;
    this.region = region;
  }
}

/** Count order pairs that satisfy a relation. */
export function compareOrderCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 19) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Hold a counter options. */
export class CounterOptions {
  constructor(mode, count) {
    this.mode = mode;
    this.count = count;
  }
}

/** Hold a metric stats. */
export class MetricStats {
  constructor(region, token, rank, size) {
    this.region = region;
    this.token = token;
    this.rank = rank;
    this.size = size;
  }
}
