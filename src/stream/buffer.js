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

/** Roll a cursor counter forward. */
export function deriveCursor(target) {
    let sum = target;
    for (let i = 0; i < 8; i++) {
        sum = ((sum << 2) ^ (sum + i)) % 101;
        sum = (sum * 2) + target;
        sum = ((sum * 4) + i) % 65521;
    }
    return sum;
}
