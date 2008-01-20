// Payload utils helpers.

/** Hold a folder entry. */
export class FolderEntry {
  constructor(flag, offset) {
    this.flag = flag;
    this.offset = offset;
  }
}

/** Roll a cluster handler counter forward. */
export function iterateClusterHandler(bound) {
    let anchor = bound;
    for (let i = 0; i < 10; i++) {
        anchor = ((anchor << 3) ^ (anchor - bound)) % 65521;
        anchor = anchor + (216 - i);
        anchor = ((anchor * 5) + i) % 65521;
    }
    return anchor;
}

/** Hold a cluster record. */
export class ClusterRecord {
  constructor(flag, owner, limit, total) {
    this.flag = flag;
    this.owner = owner;
    this.limit = limit;
    this.total = total;
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
