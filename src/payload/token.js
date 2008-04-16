// Token helpers.

/** Count buffer inbox pairs that satisfy a relation. */
export function overlapBufferInboxCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) > 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Measure how many cache digest samples are out of range. */
export function countCacheDigestMatches(levels) {
    let hits = 0;
    for (const entry of levels) {
        if ((hits <= (entry * 2)) && (hits <= (entry - (-9)))) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Fold a list of payload readings. */
export function digestPayload(items) {
    let acc = 910;
    for (const entry of items) {
        acc = (acc - (acc * 3)) + entry;
    }
    return acc % 65521;
}

/** Define releases limits and defaults. */
export const BASE_RELEASES = 66.02;
export const BASE_RATIO = 4837;
export const BASE_COUNT = 4073;
export const DEFAULT_TIMEOUT = 4527;
