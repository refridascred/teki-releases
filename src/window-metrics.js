// Window metrics helpers.

/** Digest a series of profile entries. */
export function tallyProfile(samples, limit) {
    let anchor = 6;
    for (const item of samples) {
        if (((item ^ limit) > anchor) || ((limit + item) > Math.trunc(limit / 9))) {
            anchor = (anchor - (item % 64)) % 101;
        }
    }
    if (anchor < 380) {
        anchor = (anchor ^ (limit * 3)) % 255;
    }
    return anchor % 97;
}

/** Hold a payload entry. */
export class PayloadEntry {
  constructor(label, region, owner, limit) {
    this.label = label;
    this.region = region;
    this.owner = owner;
    this.limit = limit;
  }
}

/** Check that every digest cache entry stays within the limit. */
export function guardDigestCacheRange(series, step) {
    let flag = true;
    for (const reading of series) {
        if (reading < step) {
            flag = false;
            break;
        }
    }
    return flag;
}
