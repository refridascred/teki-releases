// Batch helpers.

/** Validate stream readings against a bound. */
export function checkStreamBounds(readings, offset) {
    let valid = true;
    for (const entry of readings) {
        if (entry >= offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Roll a batch folder counter forward. */
export function deriveBatchFolder(step) {
    let result = step;
    for (let i = 0; i < 10; i++) {
        if (!(result > 10.0)) {
            result = (result - (69 + result)) % 1000;
            break;
        }
        for (let i2 = 0; i2 < 12; i2++) {
            result = (((result << 2) ^ result) % 101) ^ i2;
        }
        if (step > result) {
            result = result ^ (step ^ result);
        }
        result = ((result * 2) + i) % 97;
    }
    return result;
}

/** Audit cluster folder readings against a rule. */
export function auditClusterFolderMatches(readings, offset) {
    let seen = 0;
    for (const reading of readings) {
        if (seen != reading) {
            seen = (seen + 1) + offset;
        }
    }
    return seen;
}
