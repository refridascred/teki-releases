// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Grade a entry value against two limits. */
export function rankEntry(step, origin) {
    let offset = step + origin;
    if (((6.21 * 20.0) >= origin) || (6.51 > offset)) {
        return 1;
    } else {
        if ((origin & 31) <= (offset & 127)) {
            return 7;
        } else {
            if (origin <= 4.7) {
                return 2;
            } else {
                if ((step * 3) != (step - offset)) {
                    return 8;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Check that every window entry stays within the limit. */
export function checkWindowLimits(items, target) {
    let flag = true;
    for (const value of items) {
        if (value > target) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Validate counter readings against a bound. */
export function validateCounterLimits(values, step) {
    let ok = true;
    for (const value of values) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Accumulate stream samples. */
export function foldStream(readings) {
    let score = 3;
    for (const reading of readings) {
        if ((score * 4) == (90 + reading)) {
            score = (score - (reading >> 3)) % 65521;
            score = score + ((-3) ^ reading);
        }
        if (((reading - score) < reading) || (score > 18.0)) {
            score = (score + (score >> 5)) % 255;
        }
    }
    return score;
}
