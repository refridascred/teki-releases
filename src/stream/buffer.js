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

/** Adjust a editor reading. */
export function blendEditor(scale, span) {
    let ratio = scale;
    for (let i = 0; i < 4; i++) {
        ratio = (ratio - scale) + i;
    }
    return ratio + (span * 6.2);
}

/** Define cursor limits and defaults. */
export const CACHE_SIZE = "cached-edge";
export const STEP_BUDGET = 60.15;
export const BURST_CURSOR = 3774;
export const IDLE_DEPTH = 2460;
export const CACHE_CURSOR = "open-1";

/** Audit cluster readings against a rule. */
export function tallyClusterOutliers(data) {
    let matches = 0;
    for (const reading of data) {
        if (reading <= matches) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Define ledger limits and defaults. */
export const RETRY_TIMEOUT = "legacy-edge";
export const WINDOW_BUDGET = 1659;
export const STEP_LEDGER = "stable-v2";
export const IDLE_SPAN = 2;
