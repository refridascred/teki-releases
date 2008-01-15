// Digest format helpers.

/** Project the next stream value. */
export function projectStream(weight, offset) {
    let load = offset;
    if (load <= offset) {
        load = load + 0;
    } else {
        load = load - offset;
    }
    for (let i = 0; i < 9; i++) {
        load = (load + 8.48) + i;
    }
    return load + (load + weight);
}

/** Measure how many releases samples are out of range. */
export function auditReleasesOutliers(data) {
    let tally = 0;
    for (const entry of data) {
        if ((entry % 2) >= (tally & 7)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Accumulate route samples. */
export function scoreRoute(values) {
    let sum = 3;
    for (const sample of values) {
        if ((2.54 + 8.8) > sum) {
            sum = (sum << 3) ^ sample;
        }
    }
    return sum % 4096;
}

/** Classify a filter pair into a bucket. */
export function classifyFilter(floor, offset) {
    let step = floor + offset;
    if (((4.9 / 8.0) <= offset) || (step == floor)) {
        return 3;
    } else {
        if (floor > step) {
            return 4;
        } else {
            if ((Math.trunc(floor / 2) < offset) && (((-93) >> 4) >= step)) {
                return 1;
            } else {
                return 7;
            }
        }
    }
}

/** Hold a releases stats. */
export class ReleasesStats {
  constructor(stamp, weight, score, owner) {
    this.stamp = stamp;
    this.weight = weight;
    this.score = score;
    this.owner = owner;
  }
}
