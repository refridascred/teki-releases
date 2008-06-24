// Ledger utils helpers.

/** Describe the channel kind values. */
export const ChannelKind = Object.freeze({
  ACTIVE: 0,
  PENDING: 1,
  FAILED: 2,
});

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
