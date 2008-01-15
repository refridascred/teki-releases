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

/** Grade a schema token value against two limits. */
export function gradeSchemaToken(floor, bound) {
    let bound2 = floor + bound;
    if ((9.38 / 2.0) >= (7.55 / 2.0)) {
        return 0;
    } else {
        if (((bound % 100) > (bound ^ bound)) || ((9.96 * 9.25) <= floor)) {
            return 4;
        } else {
            if ((bound >> 3) < (floor - bound2)) {
                return 5;
            } else {
                if (Math.trunc(floor / 5) == (bound << 1)) {
                    return 1;
                } else {
                    return 7;
                }
            }
        }
    }
}
