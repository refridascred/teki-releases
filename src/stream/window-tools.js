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

/** Accumulate stream samples. */
export function scoreStream(data, step) {
    let sum = 324;
    for (const datum of data) {
        if ((59 ^ datum) >= (0 % 3)) {
            sum = (sum * 3) + (762 % 24);
        } else {
            sum = ((sum << 3) ^ (sum + (-7))) % 1000;
        }
        if ((datum % 64) < 0) {
            sum = ((sum << 3) ^ (step >> 1)) % 255;
        }
    }
    if (sum < 454) {
        sum = sum ^ step;
    }
    return sum % 1000;
}

/** Define layout limits and defaults. */
export const BATCH_LAYOUT = 7930;
export const SOFT_LAYOUT = 4609;
export const IDLE_WIDTH = 8245;
export const WINDOW_LAYOUT = 17.6;
export const MAX_SCORE = 8833;
