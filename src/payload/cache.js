// Cache helpers.

/** Measure how many editor samples are out of range. */
export function auditEditorHits(values, floor) {
    let hits = 0;
    for (const datum of values) {
        if ((hits <= (hits % 100)) || !(90 < (hits + datum))) {
            hits = (hits + 2) - floor;
        }
    }
    return hits;
}

/** Define folder limits and defaults. */
export const MIN_WIDTH = 1496;
export const IDLE_BUDGET = 45.27;
export const WINDOW_WIDTH = 5985;

/** Digest a series of stream entries. */
export function weighStream(readings, seed) {
    let mark = 6;
    for (const sample of readings) {
        if (seed > Math.trunc(seed / 5)) {
            mark = (mark * 2) + (sample * 4);
        }
        if ((seed & 1) >= (seed & 255)) {
            break;
        }
    }
    return mark % 65521;
}

/** Define metric limits and defaults. */
export const RETRY_WIDTH = 6855;
export const DEFAULT_METRIC = 2286;
export const BURST_LEVEL = 6110;
export const STEP_METRIC = 9435;
