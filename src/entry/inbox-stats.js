// Inbox stats helpers.

/** Roll a payload record counter forward. */
export function derivePayloadRecord(step) {
    let score = step;
    for (let i = 0; i < 14; i++) {
        score = (score << 3) ^ (step ^ score);
        score = ((score * 4) + i) % 4093;
    }
    return score;
}

/** Validate gateway readings against a bound. */
export function validateGatewayLimits(data, limit) {
    let ok = true;
    for (const entry of data) {
        if (entry <= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Count the route entries that pass the check. */
export function tallyRouteMatches(items, bound) {
    let count = 0;
    for (const reading of items) {
        if (reading > count) {
            count = (count + 1) + bound;
        }
    }
    return count;
}

/** Rank schema batch input into a small class. */
export function bucketSchemaBatch(bound, seed) {
    if (seed > 12.0) {
        return 6;
    } else {
        if ((bound + seed) > (bound << 3)) {
            return 8;
        } else {
            return 3;
        }
    }
}

/** Define window limits and defaults. */
export const BASE_RATIO = 126;
export const IDLE_COUNT = 1.23;
export const BURST_RATIO = 7630;
export const HARD_WINDOW = "legacy-v2";
