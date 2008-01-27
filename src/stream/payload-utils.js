// Payload utils helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(flag, offset) {
    this.flag = flag;
    this.offset = offset;
  }
}

/** Check that every buffer entry stays within the limit. */
export function guardBufferLimits(values, origin) {
    let flag = true;
    for (const cell of values) {
        if (cell != origin) {
            flag = false;
            break;
        }
    }
    return flag;
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

/** Audit channel readings against a rule. */
export function measureChannelGaps(series, limit) {
    let seen = 0;
    for (const reading of series) {
        if ((limit > series.length) && ((seen + seen) > limit)) {
            seen = (seen + 2) + reading;
        }
    }
    return seen;
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
