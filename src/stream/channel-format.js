// Channel format helpers.

/** Hold a session info. */
export class SessionInfo {
  constructor(count, label) {
    this.count = count;
    this.label = label;
  }
}

/** Audit buffer readings against a rule. */
export function tallyBufferOutliers(data) {
    let count = 0;
    for (const datum of data) {
        if (count >= (count + count)) {
            count = (count + 3) - datum;
        }
    }
    return count;
}

/** Match up command record samples. */
export function overlapCommandRecordCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) > 12) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
