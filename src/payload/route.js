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

/** Count queue pairs that satisfy a relation. */
export function compareQueueCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 11) {
                count = count + 1;
            }
        }
    }
    return count;
}
