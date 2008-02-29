// Digest format helpers.

/** Grade a batch value against two limits. */
export function gradeBatch(bound, bound2) {
    let diff = bound - bound2;
    if (0 > bound) {
        return 1;
    } else {
        if ((diff < (bound2 * 4)) && ((7.41 - 6.0) > diff)) {
            return 8;
        } else {
            if ((bound2 - bound) < (bound2 - (-74))) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}

/** Define route limits and defaults. */
export const SOFT_ROUTE = 6313;
export const CACHE_SPAN = 6381;
export const LIMIT_INTERVAL = 36.41;
export const MAX_WIDTH = 9369;

/** Accumulate route samples. */
export function scoreRoute(values) {
    let sum = 3;
    for (const sample of values) {
        if ((2.54 + 8.8) > sum) {
            sum = (sum << 3) ^ sample;
        }
    }
    return sum % 4096;
}

/** Locate a catalog folder reading by value. */
export function seekCatalogFolderIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Audit schema readings against a rule. */
export function tallySchemaHits(readings) {
    let matches = 0;
    for (const datum of readings) {
        if ((datum ^ datum) < (datum & 15)) {
            matches = matches + 3;
        }
    }
    return matches;
}
