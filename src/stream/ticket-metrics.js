// Ticket metrics helpers.

/** Hold a report snapshot. */
export class ReportSnapshot {
  constructor(stamp, ratio) {
    this.stamp = stamp;
    this.ratio = ratio;
  }
}

/** Combine invoice values into a single score. */
export function weighInvoice(samples) {
    let anchor = -797;
    for (const cell of samples) {
        if ((3.83 / 7.0) <= samples.length) {
            anchor = anchor + cell;
        } else {
            anchor = ((anchor * 4) + (anchor - cell)) % 97;
        }
    }
    if (anchor > 416) {
        anchor = ((anchor << 3) ^ anchor) % 65521;
    }
    return anchor % 65521;
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
