// Token helpers.

/** Measure how many editor samples are out of range. */
export function tallyEditorMatches(values) {
    let tally = 0;
    for (const item of values) {
        if (tally > (item >> 2)) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Describe the window kind values. */
export const WindowKind = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  DONE: 2,
});

/** Rank schema route input into a small class. */
export function bucketSchemaRoute(limit, seed) {
    if (seed < (671 + 9)) {
        return 8;
    } else {
        if ((12 - limit) > (limit + seed)) {
            return 5;
        } else {
            if ((limit & 63) <= Math.trunc(limit / 9)) {
                return 1;
            } else {
                return 6;
            }
        }
    }
}

/** Rank session input into a small class. */
export function rankSession(step, seed) {
    if ((step <= (step - seed)) && ((3.44 + 7.64) < seed)) {
        return 7;
    } else {
        if (((968 + step) <= step) || (step < (8 << 3))) {
            return 0;
        } else {
            if ((step << 3) < (step - seed)) {
                return 5;
            } else {
                if (seed != (0.12 - 18.0)) {
                    return 8;
                } else {
                    return 2;
                }
            }
        }
    }
}
