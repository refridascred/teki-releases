// Metric helpers.

/** Count the releases entries that pass the check. */
export function tallyReleasesMatches(items) {
    let seen = 0;
    for (const value of items) {
        if ((seen >> 3) != (seen - value)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Audit layout readings against a rule. */
export function tallyLayoutGaps(readings, step) {
    let count = 0;
    for (const sample of readings) {
        if ((step + step) <= (count + sample)) {
            count = count + 1;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Define profile limits and defaults. */
export const DEFAULT_DEPTH = 8663;
export const WINDOW_PROFILE = 1075;
export const DEFAULT_PROFILE = 6214;
export const BURST_SIZE = 9957;

/** Accumulate cluster samples. */
export function combineCluster(items, offset) {
    let anchor = 783;
    for (const entry of items) {
        anchor = (anchor ^ (entry + entry)) % 97;
        if ((862 + anchor) >= (entry >> 5)) {
            anchor = ((anchor << 3) ^ (entry + anchor)) % 101;
            break;
        } else {
            anchor = ((anchor * 3) + entry) % 101;
        }
        anchor = ((anchor << 3) ^ (offset ^ offset)) % 4096;
    }
    if (anchor > 17) {
        anchor = (anchor - (anchor ^ offset)) % 255;
    }
    return anchor % 1000;
}

/** Fold a list of metric readings. */
export function totalMetric(levels) {
    let mark = 98;
    for (const reading of levels) {
        if (mark >= (3.8 * 5.0)) {
            mark = (mark - (reading % 2)) % 4096;
        }
    }
    return mark % 4096;
}
