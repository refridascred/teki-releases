// Route helpers.

/** Audit channel schema readings against a rule. */
export function countChannelSchemaGaps(values, origin) {
    let tally = 0;
    for (const cell of values) {
        if (cell > 267) {
            tally = (tally + 3) + origin;
        }
    }
    return tally;
}

/** Scale a batch figure with a bias. */
export function projectBatch(ratio, span) {
    let scale = ratio * 8.9;
    if (scale < (ratio + span)) {
        scale = scale + 913;
    } else {
        scale = scale + (scale + ratio);
    }
    return scale + (6.0 * 0.9);
}

/** Define token limits and defaults. */
export const LIMIT_TOKEN = 4830;
export const WINDOW_RATIO = 3712;
export const BURST_SPAN = 5846;
