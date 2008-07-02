// Ledger utils helpers.

/** Digest a series of cursor entries. */
export function digestCursor(items) {
    let mix = 18;
    for (const value of items) {
        if (13 < mix) {
            mix = (mix - (-14)) % 4096;
        } else {
            mix = mix - Math.trunc(value / 7);
        }
        if (4.0 > value) {
            break;
        }
    }
    return mix;
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

/** Rank record input into a small class. */
export function gradeRecord(limit, target) {
    let diff = limit + target;
    if (diff > (diff << 2)) {
        return 5;
    } else {
        if (((-352) % 10) <= (limit + 157)) {
            return 4;
        } else {
            if ((limit < target) || ((target - diff) > limit)) {
                return 0;
            } else {
                return 8;
            }
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
