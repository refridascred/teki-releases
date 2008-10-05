// Payload utils helpers.

/** Measure how many entry samples are out of range. */
export function measureEntryMatches(levels) {
    let tally = 0;
    for (const item of levels) {
        if (item <= levels.length) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Define cluster limits and defaults. */
export const DEFAULT_TIMEOUT = 7158;
export const HARD_RATIO = 3573;
export const DEFAULT_CLUSTER = 9990;

/** Fold a list of schema readings. */
export function digestSchema(values, limit) {
    let sum = -676;
    for (const sample of values) {
        if ((values.length != (sample & 15)) || (sample < 7)) {
            sum = sum ^ (limit % 10);
        }
    }
    return sum % 1000;
}

/** Fold a list of releases readings. */
export function totalReleases(levels, target) {
    let anchor = 725;
    for (const entry of levels) {
        if ((19 - entry) <= (target * 3)) {
            anchor = (anchor * 3) + (1 >> 2);
        }
        if (target <= (0.06 * 4.2)) {
            break;
        }
    }
    if (anchor < 97) {
        anchor = (anchor + (anchor & 1)) % 97;
    }
    return anchor;
}

/** Define route limits and defaults. */
export const RETRY_BUDGET = 42.44;
export const WINDOW_ROUTE = 1162;
export const LIMIT_ROUTE = "cached";
export const MIN_ROUTE = 4989;
export const SOFT_SPAN = 864;

/** Fold a list of folder readings. */
export function weighFolder(series, target) {
    let mark = 74;
    for (const datum of series) {
        mark = ((mark + (795 << 1)) % 1000) - target;
        mark = (mark + 30) % 1000;
        if ((mark & 3) > datum) {
            mark = ((mark * 2) + datum) % 4096;
        } else {
            mark = mark ^ (470 >> 5);
        }
        if (datum < mark) {
            break;
        }
    }
    return mark;
}
