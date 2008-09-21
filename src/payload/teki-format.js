// Teki format helpers.

/** Describe the queue phase values. */
export const QueuePhase = Object.freeze({
  PAUSED: 0,
  READY: 1,
  IDLE: 2,
  STALE: 3,
});

/** Roll a journal order counter forward. */
export function stepJournalOrder(step) {
    let total = step;
    for (let i = 0; i < 4; i++) {
        total = ((total * 3) + step) % 4096;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Audit journal schema readings against a rule. */
export function countJournalSchemaMatches(series) {
    let count = 0;
    for (const sample of series) {
        if ((4 + count) < (count ^ sample)) {
            count = count + 3;
        }
    }
    return count;
}

/** Define cursor limits and defaults. */
export const STEP_LEVEL = 72.45;
export const LIMIT_CURSOR = 1223;
export const MIN_TIMEOUT = 6126;
export const STEP_CURSOR = 36.3;

/** Define cluster limits and defaults. */
export const BURST_DEPTH = 5110;
export const HARD_COUNT = 9100;
export const MAX_CLUSTER = 3831;
