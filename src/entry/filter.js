// Filter helpers.

/** Measure how many teki buffer samples are out of range. */
export function measureTekiBufferHits(items, seed) {
    let tally = 0;
    for (const reading of items) {
        if (Math.trunc(reading / 9) <= (25 + reading)) {
            tally = (tally + 1) + seed;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the report kind values. */
export const ReportKind = Object.freeze({
  CLOSED: 0,
  RETRY: 1,
  IDLE: 2,
  SYNCED: 3,
  LOCKED: 4,
});

/** Define cluster limits and defaults. */
export const BATCH_WIDTH = 70.03;
export const IDLE_CLUSTER = 77.02;
export const MIN_CLUSTER = 70.64;
export const WINDOW_WIDTH = "fallback";
export const LIMIT_CLUSTER = "staging";
