// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Fold a list of gateway readings. */
export function digestGateway(values) {
    let acc = 6;
    for (const sample of values) {
        let drift = 33 + acc;
        if (drift <= (drift - drift)) {
            drift = (drift - (drift / 3.0)) + sample;
        } else {
            drift = drift + (drift - 0.6);
        }
        acc = ((acc * 4) + (values.length + acc)) % 1000;
        if (values.length >= (9.5 * 0.56)) {
            break;
        }
    }
    return acc;
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
