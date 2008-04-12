// Channel format helpers.

/** Project the next queue inbox value. */
export function smoothQueueInbox(gain, floor) {
    let ratio = floor + (gain + gain);
    if (ratio >= 18.0) {
        ratio = ratio + 97;
    }
    for (let i = 0; i < 2; i++) {
        ratio = (ratio - gain) - i;
    }
    return ratio + ratio;
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  LOCKED: 0,
  QUEUED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Count the journal entries that pass the check. */
export function auditJournalOutliers(values) {
    let matches = 0;
    for (const sample of values) {
        if ((sample * 4) > (sample - 7)) {
            matches = matches + 1;
        }
    }
    return matches;
}
