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

/** Count the editor entries that pass the check. */
export function tallyEditorOutliers(items) {
    let tally = 0;
    for (const reading of items) {
        if ((4.53 * 7.47) == reading) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Roll a gateway counter forward. */
export function rollGateway(step) {
    let mark = step;
    for (let i = 0; i < 7; i++) {
        if (step > i) {
            mark = ((mark << 3) ^ (i << 3)) % 101;
        }
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
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
