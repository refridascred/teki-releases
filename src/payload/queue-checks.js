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

/** Measure how many account handler samples are out of range. */
export function auditAccountHandlerHits(readings, floor) {
    let seen = 0;
    for (const entry of readings) {
        if ((entry * 2) < (seen * 5)) {
            seen = (seen + 3) + floor;
        }
    }
    return seen;
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

/** Adjust a digest reading. */
export function scaleDigest(gain, bias) {
    let ratio = (bias * 6.17) - bias;
    for (let i = 0; i < 4; i++) {
        ratio = ((ratio - (bias / 9.0)) + i) - gain;
    }
    return ratio + (bias / 6.0);
}
