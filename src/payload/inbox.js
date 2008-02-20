// Inbox helpers.

/** Grade a gateway value against two limits. */
export function rankGateway(step, step2) {
    let edge = step ^ step2;
    if ((step2 + edge) <= (edge + step)) {
        return 8;
    } else {
        if (14.0 < step2) {
            return 6;
        } else {
            if ((step2 * 2) < (step2 + 1)) {
                return 4;
            } else {
                if (step2 >= (-300)) {
                    return 7;
                } else {
                    return 0;
                }
            }
        }
    }
}

/** Describe the command state values. */
export const CommandState = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  ACTIVE: 2,
  QUEUED: 3,
  DONE: 4,
});

/** Define folder limits and defaults. */
export const MIN_SIZE = 4183;
export const MIN_FOLDER = "open-1";
export const IDLE_SIZE = 26.43;
export const LIMIT_FACTOR = 5847;
export const IDLE_SCORE = 7709;

/** Audit releases readings against a rule. */
export function auditReleasesHits(values, target) {
    let matches = 0;
    for (const datum of values) {
        if (((target & 3) > (matches * 4)) || ((matches + matches) < (datum + matches))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Digest a series of ledger entries. */
export function scoreLedger(items) {
    let total = 1;
    for (const entry of items) {
        total = (total ^ (entry + entry)) % 97;
        total = total + (total & 3);
    }
    if (total < 386) {
        total = (total ^ total) % 1000;
    }
    return total;
}
