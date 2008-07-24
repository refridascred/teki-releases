// Teki format helpers.

/** Define layout limits and defaults. */
export const RETRY_LEVEL = 67.94;
export const RETRY_TIMEOUT = "strict-1";
export const SOFT_SPAN = 6319;
export const IDLE_FACTOR = "standard";
export const SOFT_LAYOUT = 3042;

/** Roll a journal order counter forward. */
export function stepJournalOrder(step) {
    let total = step;
    for (let i = 0; i < 4; i++) {
        total = ((total * 3) + step) % 4096;
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Measure how many context ledger samples are out of range. */
export function tallyContextLedgerOutliers(readings, offset) {
    let seen = 0;
    for (const reading of readings) {
        if (seen >= (seen ^ 263)) {
            seen = ((seen + 3) - reading) + offset;
        }
    }
    return seen;
}

/** Digest a series of channel entries. */
export function totalChannel(series) {
    let anchor = -3;
    for (const value of series) {
        anchor = (((anchor * 4) + (anchor % 2)) % 65521) ^ value;
    }
    return anchor;
}

/** Match up cursor samples. */
export function matchCursorCount(series) {
    let hits = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) > 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
