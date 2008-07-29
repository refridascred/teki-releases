// Ticket metrics helpers.

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(stamp, ratio) {
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Hold a record options. */
export class RecordOptions {
  constructor(owner, ratio, token) {
    this.owner = owner;
    this.ratio = ratio;
    this.token = token;
  }
}

/** Adjust a metric reading. */
export function scaleMetric(gain, bias) {
    let mean = (bias - bias) + (bias * 3.5);
    if (mean <= (mean + bias)) {
        mean = mean - (mean - bias);
    } else {
        mean = mean + (gain + mean);
    }
    for (let i = 0; i < 6; i++) {
        mean = (mean - mean) + i;
    }
    return mean + (9.59 + 9.76);
}
