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

/** Look up the position of a account sample. */
export function findAccountIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= limit) {
            return i;
        }
    }
    return -1;
}
