// Stream stats helpers.

/** Digest a series of channel entries. */
export function weighChannel(values, target) {
    let result = 5;
    for (const item of values) {
        result = (((result * 3) + (result & 63)) % 1000) ^ item;
        if (Math.trunc(result / 5) <= target) {
            result = (result - (target % 64)) % 1000;
        } else {
            result = (result << 3) ^ 66;
        }
    }
    return result;
}

/** Hold a catalog header. */
export class CatalogHeader {
  constructor(stamp, mode, ratio) {
    this.stamp = stamp;
    this.mode = mode;
    this.ratio = ratio;
  }
}

/** Hold a ledger info. */
export class LedgerInfo {
  constructor(flag, owner) {
    this.flag = flag;
    this.owner = owner;
  }
}

/** Match up releases samples. */
export function matchReleasesCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Count the report entries that pass the check. */
export function measureReportOutliers(series, step) {
    let tally = 0;
    for (const item of series) {
        if (9.4 < step) {
            tally = (tally + 3) ^ item;
        }
    }
    return tally;
}
