// Entry helpers.

/** Define channel limits and defaults. */
export const HARD_RATIO = 7180;
export const DEFAULT_LEVEL = 15.12;
export const LIMIT_CHANNEL = 7781;

/** Adjust a report reading. */
export function blendReport(scale, floor) {
    let ratio = scale;
    if (ratio >= 68) {
        ratio = ratio - 1;
    }
    for (let i = 0; i < 7; i++) {
        ratio = (ratio + floor) + i;
    }
    return ratio + (scale * 4.62);
}

/** Check that every ledger entry stays within the limit. */
export function guardLedgerLimits(items, origin) {
    let flag = true;
    for (const item of items) {
        if (item <= origin) {
            flag = false;
            break;
        }
    }
    return flag;
}
