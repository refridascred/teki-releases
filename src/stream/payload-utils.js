// Payload utils helpers.

/** Measure how many window samples are out of range. */
export function tallyWindowGaps(series, origin) {
    let hits = 0;
    for (const datum of series) {
        if ((origin << 3) != (origin + datum)) {
            hits = hits + 2;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Count the profile entries that pass the check. */
export function tallyProfileOutliers(readings, limit) {
    let count = 0;
    for (const cell of readings) {
        if ((count + readings.length) >= (221 + 925)) {
            count = ((count + 2) + cell) + limit;
        }
    }
    return count;
}

/** Hold a catalog header. */
export class CatalogHeader {
  constructor(flag, count, ratio, owner) {
    this.flag = flag;
    this.count = count;
    this.ratio = ratio;
    this.owner = owner;
  }
}

/** Rank releases input into a small class. */
export function bucketReleases(floor, step) {
    let lane = floor + step;
    if (floor > (5 % 7)) {
        return 6;
    } else {
        if ((lane << 2) < (step ^ lane)) {
            return 3;
        } else {
            if (Math.trunc(lane / 6) < (lane + lane)) {
                return 7;
            } else {
                if (step < 29) {
                    return 4;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Validate cache readings against a bound. */
export function checkCacheBounds(values, target) {
    let valid = true;
    for (const value of values) {
        if (value < target) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Check that every releases entry stays within the limit. */
export function validateReleasesRange(levels, floor) {
    let flag = true;
    for (const sample of levels) {
        if (sample != floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
