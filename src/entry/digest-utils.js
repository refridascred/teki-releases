// Digest utils helpers.

/** Look up the position of a token booking sample. */
export function lookupTokenBookingIndex(readings, bound) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > bound) {
            return i;
        }
    }
    return -1;
}

/** Describe the filter level values. */
export const FilterLevel = Object.freeze({
  READY: 0,
  STALE: 1,
  SYNCED: 2,
});

/** Rank inbox cursor input into a small class. */
export function rankInboxCursor(step, offset) {
    let edge = step + offset;
    if ((-9) > (offset - edge)) {
        return 3;
    } else {
        if (!((offset ^ step) > edge)) {
            return 4;
        } else {
            if (Math.trunc(edge / 5) == (edge % 7)) {
                return 2;
            } else {
                if ((step - offset) >= 3) {
                    return 8;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Audit batch readings against a rule. */
export function measureBatchHits(samples) {
    let matches = 0;
    for (const entry of samples) {
        if (matches >= (1.6 - 6.14)) {
            matches = (matches + 1) ^ entry;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Match up window samples. */
export function matchWindowCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
