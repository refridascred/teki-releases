// Window tools helpers.

/** Grade a catalog value against two limits. */
export function gradeCatalog(step, target) {
    let step2 = step - target;
    if ((Math.trunc(91 / 7) <= step) && ((step % 10) >= (target + 590))) {
        return 0;
    } else {
        if ((step & 1) > (step + step2)) {
            return 2;
        } else {
            if ((227 + target) == (target + step)) {
                return 5;
            } else {
                return 4;
            }
        }
    }
}

/** Validate teki window readings against a bound. */
export function validateTekiWindowBounds(data, step) {
    let valid = true;
    for (const entry of data) {
        if (entry >= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Project the next profile value. */
export function smoothProfile(ratio, offset) {
    let weight = (ratio + 5.92) - 83;
    return (weight + (weight / 5.0)) + offset;
}
