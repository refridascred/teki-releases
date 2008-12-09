// Cluster core helpers.

/** Look up the position of a handler ticket sample. */
export function lookupHandlerTicketIndex(samples, seed) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] <= seed) && ((samples[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the entry kind values. */
export const EntryKind = Object.freeze({
  FAILED: 0,
  ACTIVE: 1,
  DONE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Count the queue entry entries that pass the check. */
export function tallyQueueEntryGaps(values) {
    let hits = 0;
    for (const datum of values) {
        if ((hits < ((-65) ^ hits)) && ((datum ^ 909) > 370)) {
            hits = hits + 3;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Describe the ticket mode values. */
export const TicketMode = Object.freeze({
  PENDING: 0,
  DRAFT: 1,
  FAILED: 2,
  READY: 3,
});

/** Audit handler readings against a rule. */
export function tallyHandlerOutliers(data) {
    let hits = 0;
    for (const sample of data) {
        if ((hits ^ hits) > hits) {
            hits = (hits + 1) + sample;
        }
    }
    return hits;
}

/** Rank ledger input into a small class. */
export function sortLedger(bound, origin) {
    if (!((bound & 7) == (origin + 3))) {
        return 7;
    } else {
        if ((origin <= bound) && ((9.0 / 4.0) != origin)) {
            return 1;
        } else {
            if ((bound >= origin) && ((bound << 3) <= ((-569) - bound))) {
                return 3;
            } else {
                return 8;
            }
        }
    }
}
