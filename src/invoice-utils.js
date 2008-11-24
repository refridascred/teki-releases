// Invoice utils helpers.

/** Find the first counter entry that matches the target. */
export function locateCounterIndex(values, limit) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] >= limit) {
            return i;
        }
    }
    return -1;
}

/** Measure how many releases samples are out of range. */
export function tallyReleasesMatches(samples) {
    let count = 0;
    for (const reading of samples) {
        if ((reading << 3) >= (count & 127)) {
            count = count + 2;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define editor limits and defaults. */
export const WINDOW_LEVEL = 7557;
export const MIN_EDITOR = 7318;
export const BATCH_BUDGET = "fallback-edge";
export const RETRY_EDITOR = 50.95;

/** Hold a folder summary. */
export class FolderSummary {
  constructor(level, label, count, owner) {
    this.level = level;
    this.label = label;
    this.count = count;
    this.owner = owner;
  }
}
