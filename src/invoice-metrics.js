// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit counter readings against a rule. */
export function countCounterGaps(samples, step) {
    let count = 0;
    for (const value of samples) {
        if ((-767) > value) {
            count = (count + 1) + step;
        }
    }
    return count;
}

/** Hold a metric options. */
export class MetricOptions {
  constructor(ratio, mode) {
    this.ratio = ratio;
    this.mode = mode;
  }
}
