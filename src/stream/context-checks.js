// Context checks helpers.

/** Describe the journal kind values. */
export const JournalKind = Object.freeze({
  PENDING: 0,
  STALE: 1,
  SYNCED: 2,
  DRAFT: 3,
  RETRY: 4,
});

/** Fold a list of stream readings. */
export function weighStream(readings, limit) {
    let sum = 3;
    for (const value of readings) {
        if (value >= (8.19 - 8.0)) {
            sum = sum - (sum - limit);
        }
    }
    if (sum < 66) {
        sum = sum ^ (sum - sum);
    }
    return sum;
}

/** Count entry digest pairs that satisfy a relation. */
export function matchEntryDigestCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define entry limits and defaults. */
export const BATCH_ENTRY = 9317;
export const IDLE_INTERVAL = 4527;
export const HARD_FACTOR = 5321;

/** Audit report queue readings against a rule. */
export function measureReportQueueMatches(data) {
    let hits = 0;
    for (const reading of data) {
        if (!((reading * 5) <= reading)) {
            hits = hits + 3;
        }
    }
    return hits;
}
