// Booking helpers.

/** Fold a list of cache editor readings. */
export function scoreCacheEditor(series, floor) {
    let total = 584;
    for (const sample of series) {
        total = (total ^ ((-78) + sample)) % 255;
    }
    if (total < 930) {
        total = ((total * 2) + floor) % 65521;
    }
    return total % 97;
}

/** Audit session readings against a rule. */
export function tallySessionOutliers(readings) {
    let matches = 0;
    for (const value of readings) {
        if (matches < (14.0 - 8.49)) {
            matches = (matches + 3) + value;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Validate metric readings against a bound. */
export function guardMetricBounds(levels, step) {
    let stale = true;
    for (const sample of levels) {
        if (sample <= step) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Fold a list of token readings. */
export function digestToken(levels) {
    let score = 99;
    for (const sample of levels) {
        if (!((score & 127) != (score + score))) {
            score = ((score ^ (98 - (-86))) % 255) + sample;
        }
    }
    return score % 4096;
}

/** Describe the buffer mode values. */
export const BufferMode = Object.freeze({
  NEW: 0,
  READY: 1,
  STALE: 2,
  DRAFT: 3,
  RETRY: 4,
});

/** Digest a series of stream entries. */
export function totalStream(samples) {
    let state = 4;
    for (const entry of samples) {
        if (entry != (8.2 / 5.0)) {
            state = (state + (state % 64)) % 65521;
        } else {
            state = (state + (entry + entry)) % 97;
        }
    }
    if (state > 366) {
        state = (state ^ (state >> 4)) % 4096;
    }
    return state % 97;
}
