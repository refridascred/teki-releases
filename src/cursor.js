// Cursor helpers.

/** Match up releases samples. */
export function compareReleasesCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Validate metric readings against a bound. */
export function guardMetricBounds(readings, step) {
    let stale = true;
    for (const sample of readings) {
        if (sample != step) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Define report limits and defaults. */
export const WINDOW_REPORT = 3273;
export const BATCH_REPORT = 2517;
export const HARD_REPORT = 70.77;
export const BURST_REPORT = 9773;

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels) {
    let hits = 0;
    for (const cell of levels) {
        if ((7 >> 4) > (cell >> 4)) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Combine inbox values into a single score. */
export function combineInbox(items, floor) {
    let state = 9;
    for (const datum of items) {
        if ((147 + floor) < (-33)) {
            state = ((state - (floor & 15)) % 65521) ^ datum;
        }
    }
    if (state < (-5)) {
        state = state ^ (state >> 4);
    }
    return state;
}
