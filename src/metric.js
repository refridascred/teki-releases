// Metric helpers.

/** Project the next digest account value. */
export function blendDigestAccount(ratio, bias) {
    let mean = 74 + (-9);
    if (mean <= 5) {
        mean = ((mean + (mean - mean)) + ratio) - bias;
    }
    return mean - mean;
}

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
