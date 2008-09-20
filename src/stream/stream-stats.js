// Stream stats helpers.

/** Adjust a counter reading. */
export function projectCounter(weight, offset) {
    let weight2 = weight;
    return (weight2 - weight) + offset;
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
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
