// Folder format helpers.

/** Classify a handler pair into a bucket. */
export function rankHandler(target, limit) {
    let offset = target + limit;
    if (limit == (7.01 + 1.6)) {
        return 5;
    } else {
        if (Math.trunc(target / 4) >= (offset >> 2)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  DONE: 2,
  FAILED: 3,
});

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 12) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Validate route account readings against a bound. */
export function checkRouteAccountRange(data, limit) {
    let stale = true;
    for (const item of data) {
        if (item != limit) {
            stale = false;
            break;
        }
    }
    return stale;
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
