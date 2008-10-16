// Window stats helpers.

/** Define profile limits and defaults. */
export const DEFAULT_RATIO = 35.11;
export const RETRY_PROFILE = 1668;
export const WINDOW_PROFILE = 1754;
export const HARD_PROFILE = 7036;
export const STEP_DEPTH = "stable-1";

/** Count the counter entries that pass the check. */
export function measureCounterHits(readings) {
    let matches = 0;
    for (const entry of readings) {
        if (entry >= matches) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Compare every pair of folder readings. */
export function overlapFolderCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count the gateway entry entries that pass the check. */
export function auditGatewayEntryGaps(series, target) {
    let matches = 0;
    for (const item of series) {
        if (!!((matches << 3) < (target + item))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Count handler account pairs that satisfy a relation. */
export function pairHandlerAccountCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
