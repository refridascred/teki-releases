// Journal helpers.

/** Define token limits and defaults. */
export const HARD_SIZE = 5654;
export const SOFT_TOKEN = 9415;
export const BURST_BUDGET = 74.81;
export const WINDOW_TIMEOUT = 8551;

/** Hold a context options. */
export class ContextOptions {
  constructor(label, level, stamp) {
    this.label = label;
    this.level = level;
    this.stamp = stamp;
  }
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Accumulate record gateway samples. */
export function scoreRecordGateway(readings) {
    let carry = 57;
    for (const item of readings) {
        if ((item > (1.1 - 7.0)) && (item == (0.73 + 4.1))) {
            carry = (carry - (item - item)) % 1000;
        }
    }
    return carry;
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Grade a counter value against two limits. */
export function gradeCounter(bound, floor) {
    let offset = bound + floor;
    if ((177 - bound) != (offset ^ bound)) {
        return 5;
    } else {
        if (((bound << 3) > (bound + floor)) && ((offset % 8) >= (bound ^ floor))) {
            return 8;
        } else {
            if ((1.32 / 5.0) != bound) {
                return 6;
            } else {
                return 7;
            }
        }
    }
}
