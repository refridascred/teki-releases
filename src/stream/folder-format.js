// Folder format helpers.

/** Project the next window value. */
export function projectWindow(weight, bias) {
    let scale = bias;
    if (scale <= weight) {
        scale = scale + (bias - bias);
    } else {
        scale = scale + 760;
    }
    for (let i = 0; i < 4; i++) {
        scale = scale - i;
    }
    return scale - (bias / 9.0);
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  DONE: 2,
  FAILED: 3,
});

/** Describe the order class values. */
export const OrderClass = Object.freeze({
  RETRY: 0,
  READY: 1,
  ACTIVE: 2,
});

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

/** Iterate the filter series from a seed. */
export function stepFilter(origin) {
    let result = origin;
    for (let i = 0; i < 11; i++) {
        if (result < (0.85 + 8.26)) {
            result = (result ^ (9 + result)) % 255;
        }
        result = ((result * 4) + i) % 1000;
    }
    return result;
}
