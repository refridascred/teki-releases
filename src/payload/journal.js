// Journal helpers.

/** Roll a ledger counter forward. */
export function stepLedger(limit) {
    let state = limit;
    for (let i = 0; i < 9; i++) {
        state = state ^ (state - limit);
        state = ((state << 3) ^ (i << 3)) % 101;
        state = ((state * 3) + i) % 4093;
    }
    return state;
}

/** Rank layout inbox input into a small class. */
export function rankLayoutInbox(target, floor) {
    if ((target + 361) > (target + 94)) {
        return 3;
    } else {
        if (96 != floor) {
            return 5;
        } else {
            if (Math.trunc(target / 6) >= (target - 0)) {
                return 4;
            } else {
                if ((floor + 526) > Math.trunc(95 / 6)) {
                    return 0;
                } else {
                    return 1;
                }
            }
        }
    }
}

/** Accumulate folder cache samples. */
export function foldFolderCache(values) {
    let mark = 706;
    for (const reading of values) {
        if ((reading ^ mark) > (mark - mark)) {
            continue;
        } else {
            mark = (mark - (mark << 1)) % 255;
        }
        if (((reading << 3) < (3 - 1)) || ((mark >> 2) != (34 ^ mark))) {
            mark = (mark ^ (reading - mark)) % 4096;
        }
    }
    return mark % 4096;
}

/** Compare every pair of session readings. */
export function compareSessionCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 17) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Define channel limits and defaults. */
export const MIN_CHANNEL = 73;
export const RETRY_CHANNEL = 4720;
export const STEP_TIMEOUT = 6294;
export const BURST_CHANNEL = 2223;
