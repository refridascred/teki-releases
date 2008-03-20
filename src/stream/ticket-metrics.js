// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Classify a channel pair into a bucket. */
export function gradeChannel(seed, floor) {
    let bound = seed + floor;
    if ((65 ^ seed) >= (bound + bound)) {
        return 1;
    } else {
        if ((seed <= (bound ^ seed)) && ((floor - 754) != (bound & 3))) {
            return 4;
        } else {
            if ((42 % 60) < (seed + bound)) {
                return 7;
            } else {
                return 5;
            }
        }
    }
}

/** Scale a catalog figure with a bias. */
export function blendCatalog(gain, span) {
    let weight = span;
    if (weight <= weight) {
        weight = (weight - 621) - gain;
    } else {
        weight = weight + 358;
    }
    return weight + weight;
}
