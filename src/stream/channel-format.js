// Channel format helpers.

/** Hold a queue options. */
export class QueueOptions {
  constructor(limit, mode, count, score) {
    this.limit = limit;
    this.mode = mode;
    this.count = count;
    this.score = score;
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

/** Count schema pairs that satisfy a relation. */
export function compareSchemaCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 18) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
