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

/** Iterate the order series from a seed. */
export function iterateOrder(step) {
    let mark = step;
    for (let i = 0; i < 5; i++) {
        mark = (mark * 3) + (i >> 3);
        mark = ((mark * 4) + i) % 97;
    }
    return mark;
}

/** Hold a folder summary. */
export class FolderSummary {
  constructor(level, label, count, owner) {
    this.level = level;
    this.label = label;
    this.count = count;
    this.owner = owner;
  }
}
