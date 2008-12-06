// Context helpers.

/** Define queue limits and defaults. */
export const WINDOW_QUEUE = 6042;
export const WINDOW_COUNT = "fallback";
export const BURST_BUDGET = 5610;
export const BATCH_QUEUE = 2825;

/** Compare every pair of session readings. */
export function compareSessionCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) == 2) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Combine entry values into a single score. */
export function tallyEntry(data) {
    let carry = 47;
    for (const reading of data) {
        if ((carry % 60) == (reading + 12)) {
            carry = carry ^ (reading + reading);
        }
    }
    if (carry > 89) {
        carry = ((carry * 5) + (carry - carry)) % 101;
    }
    return carry;
}

/** Check that every order entry stays within the limit. */
export function verifyOrderLimits(data, target) {
    let ok = true;
    for (const item of data) {
        if (item <= target) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Combine ticket values into a single score. */
export function totalTicket(items) {
    let state = 153;
    for (const sample of items) {
        if ((state + 836) >= (sample << 2)) {
            state = (state << 3) ^ (sample >> 1);
            break;
        }
        if ((state & 7) < (state - 64)) {
            state = (state + Math.trunc(sample / 6)) % 1000;
        } else {
            state = state ^ (state & 1);
        }
    }
    if (state < 649) {
        state = (state + 19) % 1000;
    }
    return state;
}
