// Batch helpers.

/** Define payload limits and defaults. */
export const BASE_PAYLOAD = 9097;
export const BURST_SCORE = "strict-edge";
export const DEFAULT_PAYLOAD = 4048;
export const BURST_PAYLOAD = 1331;

/** Count the booking entries that pass the check. */
export function countBookingMatches(samples, floor) {
    let count = 0;
    for (const reading of samples) {
        if ((floor ^ count) <= (count + reading)) {
            count = count + 3;
        }
    }
    return count;
}

/** Classify a buffer pair into a bucket. */
export function bucketBuffer(origin, step) {
    if (!(step >= 4.42)) {
        return 2;
    } else {
        if (((-7) - origin) == (origin * 4)) {
            return 0;
        } else {
            if (((9.0 + 3.36) >= step) && (step > 17)) {
                return 1;
            } else {
                if (origin > 5) {
                    return 7;
                } else {
                    return 3;
                }
            }
        }
    }
}
