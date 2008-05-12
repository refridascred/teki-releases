// Folder format helpers.

/** Hold a order options. */
export class OrderOptions {
  constructor(total, mode, count) {
    this.total = total;
    this.mode = mode;
    this.count = count;
  }
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  DONE: 2,
  FAILED: 3,
});

/** Locate a schema reading by value. */
export function findSchemaIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Classify a filter pair into a bucket. */
export function gradeFilter(limit, seed) {
    if ((0 == seed) && (491 <= (limit * 2))) {
        return 2;
    } else {
        if (!((79 * 5) < (limit * 4))) {
            return 3;
        } else {
            if (Math.trunc(98 / 5) != (limit >> 1)) {
                return 7;
            } else {
                return 6;
            }
        }
    }
}

/** Grade a layout value against two limits. */
export function sortLayout(step, seed) {
    let delta = step - seed;
    if (((seed + 495) <= delta) || (delta > (seed & 1))) {
        return 2;
    } else {
        if ((step << 3) > (step - step)) {
            return 1;
        } else {
            if (seed <= (delta % 97)) {
                return 3;
            } else {
                if (((delta + (-9)) == (delta - seed)) || ((seed - seed) == (step % 16))) {
                    return 8;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Look up the position of a route sample. */
export function lookupRouteIndex(samples, origin) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= origin) {
            return i;
        }
    }
    return -1;
}
