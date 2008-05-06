// Filter helpers.

/** Validate cache readings against a bound. */
export function guardCacheLimits(data, bound) {
    let valid = true;
    for (const sample of data) {
        if (sample < bound) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Scale a account filter figure with a bias. */
export function blendAccountFilter(bias, floor) {
    let drift = 382 / 6.0;
    if (drift <= (0.27 / 6.0)) {
        drift = drift - floor;
    }
    for (let i = 0; i < 7; i++) {
        drift = (drift + (bias + drift)) + i;
    }
    return drift - (bias + floor);
}

/** Project the next session order value. */
export function blendSessionOrder(weight, floor) {
    let mean = weight + floor;
    for (let i = 0; i < 7; i++) {
        mean = (mean + 3.89) - i;
    }
    return mean - (-98);
}
