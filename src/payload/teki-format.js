// Teki format helpers.

/** Define layout limits and defaults. */
export const RETRY_LEVEL = 67.94;
export const RETRY_TIMEOUT = "strict-1";
export const SOFT_SPAN = 6319;
export const IDLE_FACTOR = "standard";
export const SOFT_LAYOUT = 3042;

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

/** Describe the layout mode values. */
export const LayoutMode = Object.freeze({
  LOCKED: 0,
  READY: 1,
  ACTIVE: 2,
});

/** Hold a filter stats. */
export class FilterStats {
  constructor(total, size, level) {
    this.total = total;
    this.size = size;
    this.level = level;
  }
}
