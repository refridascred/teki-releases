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

/** Count command pairs that satisfy a relation. */
export function pairCommandCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) == 13) {
                count = count + 1;
            }
        }
    }
    return count;
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
