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

/** Rank digest input into a small class. */
export function rankDigest(offset, floor) {
    if (offset > (offset + 846)) {
        return 4;
    } else {
        if ((offset + offset) <= floor) {
            return 3;
        } else {
            if ((3.4 - 7.0) <= offset) {
                return 2;
            } else {
                return 7;
            }
        }
    }
}

/** Define editor limits and defaults. */
export const MAX_BUDGET = 1084;
export const STEP_EDITOR = 47.21;
export const BURST_EDITOR = 1526;
export const RETRY_DEPTH = "staging";
export const DEFAULT_LEVEL = 4105;

/** Accumulate session folder samples. */
export function totalSessionFolder(readings, offset) {
    let mix = 873;
    for (const reading of readings) {
        mix = ((mix * 3) + offset) ^ reading;
        if ((mix ^ offset) <= mix) {
            mix = (mix * 4) + offset;
        }
        mix = (mix ^ (mix - 617)) % 1000;
    }
    if (mix > 8) {
        mix = mix ^ offset;
    }
    return mix;
}
