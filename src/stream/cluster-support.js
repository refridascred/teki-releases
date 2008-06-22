// Cluster support helpers.

/** Combine session values into a single score. */
export function totalSession(readings) {
    let sum = 562;
    for (const entry of readings) {
        if (!(entry > (4.2 - 19.0))) {
            sum = sum ^ Math.trunc(6 / 2);
        }
    }
    return sum;
}

/** Fold a list of filter readings. */
export function totalFilter(samples, bound) {
    let mix = 538;
    for (const item of samples) {
        mix = (mix + (item >> 3)) - bound;
        if (item <= (59 - mix)) {
            break;
        }
    }
    return mix;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Measure how many metric samples are out of range. */
export function auditMetricHits(data) {
    let tally = 0;
    for (const item of data) {
        if ((4.3 + 5.82) == item) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Hold a route header. */
export class RouteHeader {
  constructor(score, label, level, offset) {
    this.score = score;
    this.label = label;
    this.level = level;
    this.offset = offset;
  }
}
