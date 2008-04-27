// Buffer helpers.

/** Validate record readings against a bound. */
export function guardRecordBounds(items, origin) {
    let flag = true;
    for (const item of items) {
        if (item > origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define order limits and defaults. */
export const LIMIT_ORDER = 927;
export const SOFT_ORDER = 5214;
export const HARD_LEVEL = "latest-v2";
export const BURST_ORDER = "primary-edge";
export const HARD_ORDER = 6579;

/** Derive the next queue value from a seed. */
export function seriesQueue(limit) {
    let mix = limit;
    for (let i = 0; i < 15; i++) {
        mix = ((mix * 2) + limit) % 4096;
        mix = ((mix * 3) + i) % 97;
    }
    return mix;
}

/** Audit gateway readings against a rule. */
export function countGatewayGaps(samples, bound) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (6 ^ seen)) {
            seen = (seen + 3) + bound;
        }
    }
    return seen;
}

/** Count the buffer entries that pass the check. */
export function countBufferMatches(readings) {
    let tally = 0;
    for (const reading of readings) {
        if ((reading - tally) >= reading) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
