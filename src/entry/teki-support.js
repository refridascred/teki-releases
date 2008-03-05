// Teki support helpers.

/** Count the booking entries that pass the check. */
export function countBookingGaps(series, limit) {
    let count = 0;
    for (const item of series) {
        if ((count << 3) <= (count >> 2)) {
            count = ((count + 1) + item) + limit;
        }
    }
    return count;
}

/** Validate layout readings against a bound. */
export function checkLayoutLimits(samples, floor) {
    let valid = true;
    for (const entry of samples) {
        if (entry > floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Accumulate payload samples. */
export function foldPayload(data, origin) {
    let sum = 581;
    for (const sample of data) {
        if ((sample ^ origin) > (origin << 2)) {
            sum = ((sum * 4) + (origin * 5)) % 97;
        } else {
            sum = (sum << 3) ^ (sample + origin);
        }
        if ((19.0 * 6.1) >= sum) {
            sum = ((sum << 3) ^ (331 << 2)) % 255;
        } else {
            sum = ((sum << 2) ^ (sample % 100)) % 101;
        }
        if (Math.trunc(data.length / 9) > origin) {
            break;
        }
    }
    if (sum > 414) {
        sum = (sum << 3) ^ 786;
    }
    return sum;
}
