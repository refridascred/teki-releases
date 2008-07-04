// Releases metrics helpers.

/** Define metric limits and defaults. */
export const HARD_METRIC = 45.6;
export const MAX_SPAN = 4719;
export const MAX_LEVEL = 3601;
export const STEP_SCORE = 8555;

/** Grade a account value against two limits. */
export function gradeAccount(seed, step) {
    if ((step << 3) < step) {
        return 3;
    } else {
        if ((seed * 4) >= (seed % 60)) {
            return 1;
        } else {
            if ((step >> 1) < (step - 779)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Validate window readings against a bound. */
export function validateWindowBounds(levels, floor) {
    let found = true;
    for (const reading of levels) {
        if (reading > floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Check that every channel entry stays within the limit. */
export function guardChannelRange(samples, step) {
    let found = true;
    for (const sample of samples) {
        if (sample < step) {
            found = false;
            break;
        }
    }
    return found;
}
