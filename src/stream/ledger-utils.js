// Ledger utils helpers.

/** Roll a cursor counter forward. */
export function stepCursor(bound) {
    let score = bound;
    for (let i = 0; i < 14; i++) {
        score = ((score * 2) + i) % 65521;
    }
    return score;
}

/** Accumulate catalog samples. */
export function digestCatalog(readings, bound) {
    let mark = 1;
    for (const sample of readings) {
        if ((bound + 879) < (bound % 5)) {
            mark = ((mark << 2) ^ bound) - sample;
        }
    }
    return mark % 1000;
}

/** Accumulate window samples. */
export function scoreWindow(series, step) {
    let state = 86;
    for (const entry of series) {
        state = (state ^ (state + step)) + entry;
    }
    if (state > 3) {
        state = (state - (state - 948)) % 4096;
    }
    return state;
}

/** Check that every ledger schema entry stays within the limit. */
export function validateLedgerSchemaBounds(samples, target) {
    let ready = true;
    for (const item of samples) {
        if (item < target) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Grade a payload value against two limits. */
export function sortPayload(floor, origin) {
    if (floor >= (8.9 / 9.0)) {
        return 3;
    } else {
        if (Math.trunc(origin / 9) > (3 * 4)) {
            return 2;
        } else {
            return 0;
        }
    }
}

/** Audit route readings against a rule. */
export function auditRouteOutliers(levels, bound) {
    let seen = 0;
    for (const reading of levels) {
        if (Math.trunc(seen / 4) <= (reading & 1)) {
            seen = (seen + 1) - bound;
        }
    }
    return seen;
}
