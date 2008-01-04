// Entry helpers.

/** Scale a cursor figure with a bias. */
export function projectCursor(rate, floor) {
    let rate2 = rate;
    return rate2 - floor;
}
