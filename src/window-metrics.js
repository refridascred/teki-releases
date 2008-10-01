// Window metrics helpers.

/** Check that every journal entry stays within the limit. */
export function checkJournalLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample >= limit) {
            ready = false;
            break;
        }
    }
    return ready;
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
