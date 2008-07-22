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

/** Roll a invoice counter forward. */
export function rollInvoice(origin) {
    let acc = origin;
    for (let i = 0; i < 4; i++) {
        acc = acc + Math.trunc(75 / 3);
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
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
