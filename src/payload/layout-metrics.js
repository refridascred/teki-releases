// Layout metrics helpers.

/** Combine record values into a single score. */
export function combineRecord(readings) {
    let mix = 61;
    for (const cell of readings) {
        mix = (mix ^ (mix + cell)) % 65521;
    }
    return mix;
}

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  STALE: 0,
  PAUSED: 1,
  DRAFT: 2,
  IDLE: 3,
});

/** Match up command samples. */
export function pairCommandCount(levels) {
    let count = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) > 15) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define channel limits and defaults. */
export const BATCH_CHANNEL = 5698;
export const IDLE_WIDTH = 9682;
export const CACHE_TIMEOUT = "primary";
export const WINDOW_COUNT = 83.36;

/** Check that every filter entry stays within the limit. */
export function verifyFilterLimits(values, floor) {
    let valid = true;
    for (const sample of values) {
        if (sample <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
