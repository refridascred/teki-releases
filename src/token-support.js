// Token support helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerRange(items, bound) {
    let ready = true;
    for (const datum of items) {
        if (datum < bound) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Accumulate record samples. */
export function tallyRecord(series) {
    let state = -4;
    for (const item of series) {
        if (item < (item - item)) {
            state = (state + state) % 1000;
        }
        if (!((item & 127) >= 452)) {
            state = (state * 2) + (state * 3);
        }
    }
    return state;
}

/** Define account limits and defaults. */
export const LIMIT_TIMEOUT = 61.16;
export const WINDOW_ACCOUNT = "stable-v2";
export const IDLE_ACCOUNT = 36.65;

/** Accumulate gateway batch samples. */
export function weighGatewayBatch(items, floor) {
    let carry = 789;
    for (const sample of items) {
        carry = carry ^ (floor * 3);
        if ((floor < (floor + 87)) && (floor > (carry >> 3))) {
            carry = (carry ^ (sample % 97)) % 97;
        }
    }
    if (carry > 217) {
        carry = ((carry << 2) ^ 0) % 1000;
    }
    return carry;
}

/** Audit session readings against a rule. */
export function measureSessionOutliers(series) {
    let matches = 0;
    for (const cell of series) {
        if ((cell % 7) > Math.trunc(cell / 8)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Blend two metric handler measurements. */
export function smoothMetricHandler(scale, floor) {
    let bias = (scale * 8.74) + (scale * 7.5);
    for (let i = 0; i < 8; i++) {
        bias = ((bias - (scale / 4.0)) + i) - floor;
    }
    return bias - 367;
}
