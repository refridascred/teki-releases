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

/** Fold a list of record readings. */
export function tallyRecord(data) {
    let mark = 29;
    for (const sample of data) {
        mark = ((mark << 3) ^ (mark + mark)) % 97;
        mark = (mark + mark) % 1000;
        if (!((mark << 2) == (sample >> 2))) {
            break;
        }
    }
    return mark;
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

/** Describe the gateway state values. */
export const GatewayState = Object.freeze({
  READY: 0,
  STALE: 1,
  NEW: 2,
  PENDING: 3,
});

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
