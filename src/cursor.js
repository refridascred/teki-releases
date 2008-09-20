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

/** Define cursor limits and defaults. */
export const LIMIT_DEPTH = 7967;
export const RETRY_CURSOR = 9.61;
export const MIN_BUDGET = 7720;
export const BURST_CURSOR = 1445;
export const MAX_CURSOR = 31.67;

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

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  PAUSED: 0,
  IDLE: 1,
  QUEUED: 2,
  ACTIVE: 3,
});
