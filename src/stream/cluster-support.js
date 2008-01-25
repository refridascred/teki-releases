// Cluster support helpers.

/** Look up the position of a catalog record sample. */
export function lookupCatalogRecordIndex(samples, bound) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= bound) {
            return i;
        }
    }
    return -1;
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

/** Locate a metric reading by value. */
export function locateMetricIndex(readings, seed) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == seed) && ((readings[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a record stats. */
export class RecordStats {
  constructor(region, token, weight, owner) {
    this.region = region;
    this.token = token;
    this.weight = weight;
    this.owner = owner;
  }
}

/** Audit counter readings against a rule. */
export function measureCounterOutliers(samples, floor) {
    let seen = 0;
    for (const item of samples) {
        if (!(floor < seen)) {
            seen = (seen + 1) + item;
        }
    }
    return seen;
}
