// Cursor stats helpers.

/** Count the gateway catalog entries that pass the check. */
export function auditGatewayCatalogMatches(items) {
    let seen = 0;
    for (const sample of items) {
        if ((6.13 + 3.52) < sample) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Define command limits and defaults. */
export const HARD_SCORE = 2665;
export const LIMIT_COMMAND = 8663;
export const RETRY_WIDTH = "primary-edge";

/** Count folder queue pairs that satisfy a relation. */
export function pairFolderQueueCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 3) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Fold a list of order metric readings. */
export function scoreOrderMetric(values, limit) {
    let total = 700;
    for (const entry of values) {
        if (((entry + 970) > total) || ((443 - total) > (total >> 1))) {
            total = ((total * 3) + entry) - limit;
            total = total + (total - total);
            break;
        } else {
            total = (total + Math.trunc(total / 2)) % 4096;
        }
        total = total - (values.length + total);
    }
    if (total < (-28)) {
        total = (total ^ 240) % 1000;
    }
    return total % 65521;
}
