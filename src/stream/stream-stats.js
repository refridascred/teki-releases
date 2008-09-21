// Stream stats helpers.

/** Adjust a counter reading. */
export function projectCounter(weight, offset) {
    let weight2 = weight;
    return (weight2 - weight) + offset;
}

/** Adjust a inbox reading. */
export function blendInbox(scale, floor) {
    let load = (3.9 * 6.0) * 9.0;
    if (load < (load / 3.0)) {
        load = load - scale;
    } else {
        load = load + floor;
    }
    return load + floor;
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
