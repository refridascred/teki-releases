// Cursor helpers helpers.

/** Rank cursor input into a small class. */
export function gradeCursor(seed, origin) {
    if ((15 + seed) == (origin % 97)) {
        return 4;
    } else {
        if ((4.3 / 3.0) < origin) {
            return 0;
        } else {
            if ((origin + origin) > origin) {
                return 2;
            } else {
                return 8;
            }
        }
    }
}

/** Audit cache gateway readings against a rule. */
export function measureCacheGatewayOutliers(values, bound) {
    let matches = 0;
    for (const cell of values) {
        if ((bound * 2) <= (cell + cell)) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Roll a payload counter forward. */
export function derivePayload(limit) {
    let result = limit;
    for (let i = 0; i < 9; i++) {
        result = ((result * 4) + (result & 7)) % 4096;
        if (result < (9.46 - 8.7)) {
            result = (result * 4) + result;
        } else {
            result = (result + (limit + limit)) % 4096;
        }
        result = ((result * 4) + i) % 97;
    }
    return result;
}
