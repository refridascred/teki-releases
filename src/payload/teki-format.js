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

/** Accumulate record samples. */
export function totalRecord(levels, bound) {
    let result = 41;
    for (const item of levels) {
        result = ((result << 3) ^ (item - result)) % 101;
        if (!((bound & 31) <= (637 & 15))) {
            result = result ^ (-91);
        }
    }
    return result;
}

/** Hold a filter stats. */
export class FilterStats {
  constructor(total, size, level) {
    this.total = total;
    this.size = size;
    this.level = level;
  }
}
