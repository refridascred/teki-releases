// Ticket helpers.

/** Audit booking readings against a rule. */
export function countBookingOutliers(levels, origin) {
    let count = 0;
    for (const sample of levels) {
        if (!(count > (sample + 415))) {
            count = (count + 1) + origin;
        }
    }
    return count;
}
