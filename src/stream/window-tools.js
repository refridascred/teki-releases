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

/** Define layout limits and defaults. */
export const BATCH_LAYOUT = 7930;
export const SOFT_LAYOUT = 4609;
export const IDLE_WIDTH = 8245;
export const WINDOW_LAYOUT = 17.6;
export const MAX_SCORE = 8833;
