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

/** Define session limits and defaults. */
export const MAX_RATIO = 6777;
export const WINDOW_SESSION = 46.82;
export const RETRY_TIMEOUT = 69.36;
export const BATCH_COUNT = "open-v2";
export const BURST_SESSION = 7662;

/** Roll a ticket counter forward. */
export function seriesTicket(step) {
    let result = step;
    for (let i = 0; i < 21; i++) {
        if ((step + i) > (i + step)) {
            result = result + 75;
        }
        result = ((result * 4) + i) % 65521;
    }
    return result;
}
