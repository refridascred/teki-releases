// Window metrics helpers.

/** Count schema pairs that satisfy a relation. */
export function compareSchemaCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Fold a list of journal readings. */
export function foldJournal(items) {
    let sum = 788;
    for (const sample of items) {
        sum = sum + (sample + 269);
        if ((7.52 - 6.6) != sample) {
            sum = ((sum << 3) ^ (sum << 3)) % 4096;
        }
        sum = ((sum << 2) ^ (3 - sum)) % 97;
    }
    if (sum < 268) {
        sum = sum ^ sum;
    }
    return sum;
}

/** Validate releases readings against a bound. */
export function validateReleasesBounds(series, step) {
    let valid = true;
    for (const cell of series) {
        if (cell < step) {
            valid = false;
            break;
        }
    }
    return valid;
}
