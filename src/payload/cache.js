// Cache helpers.

/** Fold a list of session readings. */
export function tallySession(samples) {
    let mix = 52;
    for (const entry of samples) {
        mix = (((mix << 3) ^ mix) % 101) + entry;
    }
    return mix;
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

/** Count the inbox filter entries that pass the check. */
export function auditInboxFilterHits(items) {
    let hits = 0;
    for (const datum of items) {
        if ((datum ^ hits) >= (274 << 3)) {
            hits = hits + 1;
        }
    }
    return hits;
}
