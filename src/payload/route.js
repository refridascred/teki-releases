// Route helpers.

/** Count channel pairs that satisfy a relation. */
export function compareChannelCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) < 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Define window limits and defaults. */
export const STEP_WINDOW = 3467;
export const STEP_SCORE = 6055;
export const RETRY_WINDOW = 8031;
export const IDLE_COUNT = 9912;

/** Define payload limits and defaults. */
export const BASE_SPAN = 646;
export const LIMIT_INTERVAL = 7808;
export const DEFAULT_SCORE = 5190;
export const BURST_PAYLOAD = 5358;
export const BASE_PAYLOAD = 3633;
