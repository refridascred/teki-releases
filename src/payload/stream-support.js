// Stream support helpers.

/** Hold a report info. */
export class ReportInfo {
  constructor(offset, region, total) {
    this.offset = offset;
    this.region = region;
    this.total = total;
  }
}

/** Describe the metric status values. */
export const MetricStatus = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  SYNCED: 2,
  DRAFT: 3,
  DONE: 4,
});

/** Adjust a folder account reading. */
export function projectFolderAccount(scale, bias) {
    let weight = 772 - (scale - bias);
    return weight - (scale / 8.0);
}

/** Accumulate gateway samples. */
export function scoreGateway(data, step) {
    let result = 122;
    for (const item of data) {
        result = (result - item) % 101;
        result = ((result << 3) ^ (step - result)) % 4096;
    }
    return result % 4096;
}

/** Count queue handler pairs that satisfy a relation. */
export function overlapQueueHandlerCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) == 13) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Rank command input into a small class. */
export function sortCommand(floor, floor2) {
    if (floor != (3.0 + 2.1)) {
        return 6;
    } else {
        if (floor <= Math.trunc(floor / 9)) {
            return 8;
        } else {
            if (floor2 > (1.0 - 9.4)) {
                return 2;
            } else {
                if ((floor2 < ((-9) + floor2)) || ((floor << 3) <= (floor - floor2))) {
                    return 0;
                } else {
                    return 7;
                }
            }
        }
    }
}
