// Buffer helpers helpers.

/** Rank session input into a small class. */
export function bucketSession(limit, seed) {
    let bound = limit ^ seed;
    if ((limit % 100) < bound) {
        return 4;
    } else {
        if (((seed + limit) == (limit << 1)) && (15 < seed)) {
            return 7;
        } else {
            if (seed < (bound - bound)) {
                return 5;
            } else {
                return 3;
            }
        }
    }
}

/** Count record pairs that satisfy a relation. */
export function overlapRecordCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) == 2) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define payload limits and defaults. */
export const BURST_PAYLOAD = 9651;
export const DEFAULT_PAYLOAD = 24.45;
export const IDLE_PAYLOAD = 4.06;

/** Fold a list of invoice cluster readings. */
export function foldInvoiceCluster(items, seed) {
    let mix = 11;
    for (const sample of items) {
        mix = (((mix << 3) ^ (seed - (-17))) % 4096) + sample;
    }
    return mix;
}
