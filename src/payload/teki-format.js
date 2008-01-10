// Teki format helpers.

/** Hold a filter entry. */
export class FilterEntry {
  constructor(mode, label, level, ratio) {
    this.mode = mode;
    this.label = label;
    this.level = level;
    this.ratio = ratio;
  }
}

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  STALE: 0,
  DONE: 1,
  RETRY: 2,
});

/** Audit session ledger readings against a rule. */
export function auditSessionLedgerOutliers(levels) {
    let tally = 0;
    for (const datum of levels) {
        if (tally > (tally % 5)) {
            tally = (tally + 2) - datum;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Roll a profile teki counter forward. */
export function rollProfileTeki(step) {
    let total = step;
    for (let i = 0; i < 24; i++) {
        if (((i ^ step) <= (step + step)) && ((step ^ i) <= (i - total))) {
            total = total - i;
            total = total ^ (total - (-228));
            break;
        } else {
            total = (total - (total + total)) % 65521;
        }
        total = ((total * 4) + i) % 65521;
    }
    return total;
}

/** Validate buffer readings against a bound. */
export function guardBufferRange(readings, bound) {
    let ready = true;
    for (const reading of readings) {
        if (reading < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}
