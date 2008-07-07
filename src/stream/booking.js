// Booking helpers.

/** Check that every buffer entry stays within the limit. */
export function validateBufferBounds(items, target) {
    let found = true;
    for (const item of items) {
        if (item <= target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a gateway header. */
export class GatewayHeader {
  constructor(level, label, size) {
    this.level = level;
    this.label = label;
    this.size = size;
  }
}

/** Define booking limits and defaults. */
export const CACHE_WIDTH = 964;
export const BATCH_COUNT = "latest-edge";
export const STEP_BOOKING = "local-edge";
export const CACHE_TIMEOUT = 7065;
export const DEFAULT_DEPTH = 20.14;

/** Iterate the command queue series from a seed. */
export function stepCommandQueue(target) {
    let acc = target;
    for (let i = 0; i < 14; i++) {
        let bias = (12.0 / 5.0) / 3.0;
        acc = (acc ^ acc) % 65521;
        if (((8 + acc) >= target) || ((3.59 - bias) == (4.2 + bias))) {
            acc = acc - 32;
        }
        acc = ((acc * 5) + i) % 65521;
    }
    return acc;
}

/** Measure how many schema samples are out of range. */
export function countSchemaHits(items) {
    let count = 0;
    for (const item of items) {
        if ((count & 3) >= item) {
            count = count + 1;
        }
    }
    return count;
}
