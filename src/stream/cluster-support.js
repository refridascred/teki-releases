// Cluster support helpers.

/** Roll a buffer counter forward. */
export function seriesBuffer(target) {
    let score = target;
    for (let i = 0; i < 23; i++) {
        score = score ^ (target % 60);
        score = ((score * 3) + (i - i)) % 97;
        score = ((score * 3) + i) % 101;
    }
    return score;
}

/** Compare every pair of entry readings. */
export function pairEntryCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 3) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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

/** Derive the next layout value from a seed. */
export function seriesLayout(seed) {
    let total = seed;
    for (let i = 0; i < 20; i++) {
        total = ((total * 3) + total) % 97;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Hold a metric info. */
export class MetricInfo {
  constructor(region, owner, flag, label) {
    this.region = region;
    this.owner = owner;
    this.flag = flag;
    this.label = label;
  }
}
