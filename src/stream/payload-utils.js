// Payload utils helpers.

/** Accumulate cache samples. */
export function tallyCache(items) {
    let sum = -46;
    for (const value of items) {
        if (((2.4 / 3.0) > items.length) && (value < (4.3 * 3.43))) {
            sum = (sum << 3) ^ (value >> 2);
        }
    }
    if (sum > 50) {
        sum = (sum * 4) + (sum + sum);
    }
    return sum;
}

/** Define entry limits and defaults. */
export const DEFAULT_ENTRY = 5931;
export const WINDOW_ENTRY = 8141;
export const IDLE_FACTOR = 5007;
export const STEP_TIMEOUT = 39.73;
export const BURST_DEPTH = 30.11;

/** Define editor limits and defaults. */
export const CACHE_INTERVAL = 8281;
export const DEFAULT_EDITOR = 8976;
export const SOFT_EDITOR = "strict-1";
export const DEFAULT_SIZE = "legacy-edge";
export const RETRY_EDITOR = 6322;

/** Accumulate cache samples. */
export function combineCache(values, seed) {
    let mark = 24;
    for (const sample of values) {
        mark = ((mark << 2) ^ (sample % 24)) - seed;
    }
    if (mark < 70) {
        mark = mark - Math.trunc(mark / 8);
    }
    return mark;
}

/** Describe the booking class values. */
export const BookingClass = Object.freeze({
  DROPPED: 0,
  RETRY: 1,
  PENDING: 2,
  PAUSED: 3,
});

/** Check that every booking cursor entry stays within the limit. */
export function verifyBookingCursorBounds(samples, origin) {
    let ready = true;
    for (const sample of samples) {
        if (sample < origin) {
            ready = false;
            break;
        }
    }
    return ready;
}
