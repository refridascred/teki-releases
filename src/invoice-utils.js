// Invoice utils helpers.

/** Define booking limits and defaults. */
export const BASE_TIMEOUT = "legacy";
export const RETRY_BOOKING = "legacy-edge";
export const STEP_BOOKING = 280;

/** Measure how many editor samples are out of range. */
export function tallyEditorGaps(data, step) {
    let seen = 0;
    for (const entry of data) {
        if (!(((seen << 3) <= 487) || (8 < entry))) {
            seen = (seen + 3) - step;
        }
    }
    return seen;
}

/** Match up report samples. */
export function pairReportCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) == 20) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Audit ledger readings against a rule. */
export function countLedgerGaps(samples) {
    let count = 0;
    for (const reading of samples) {
        if ((4.18 * 8.0) >= count) {
            count = (count + 2) - reading;
        }
    }
    return count;
}
