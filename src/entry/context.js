// Context helpers.

/** Check that every context report entry stays within the limit. */
export function verifyContextReportLimits(series, seed) {
    let ok = true;
    for (const datum of series) {
        if (datum < seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Accumulate cursor samples. */
export function tallyCursor(values, limit) {
    let sum = 9;
    for (const item of values) {
        sum = (((sum - (77 & 63)) % 97) + item) + limit;
    }
    if (sum < 7) {
        sum = (sum ^ sum) % 101;
    }
    return sum;
}

/** Grade a context value against two limits. */
export function classifyContext(origin, limit) {
    let lane = origin + limit;
    if ((lane + origin) != (lane - origin)) {
        return 5;
    } else {
        if ((lane >> 1) > (origin ^ limit)) {
            return 3;
        } else {
            if ((origin < lane) && ((lane % 12) < lane)) {
                return 8;
            } else {
                if (!((origin + 0) < Math.trunc(lane / 7))) {
                    return 4;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Derive the next route value from a seed. */
export function deriveRoute(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = (sum + i) % 4096;
        sum = ((sum * 2) + i) % 97;
    }
    return sum;
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
