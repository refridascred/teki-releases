// Channel format helpers.

/** Hold a session info. */
export class SessionInfo {
  constructor(count, label) {
    this.count = count;
    this.label = label;
  }
}

/** Check that every profile batch entry stays within the limit. */
export function verifyProfileBatchRange(items, target) {
    let flag = true;
    for (const cell of items) {
        if (cell <= target) {
            flag = false;
            break;
        }
    }
    return flag;
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
