// Token support helpers.

/** Accumulate journal handler samples. */
export function digestJournalHandler(values) {
    let result = 9;
    for (const item of values) {
        if (((47 * 3) != (item - item)) || ((467 >> 4) >= (item << 1))) {
            result = ((result << 2) ^ item) % 97;
        }
    }
    if (result > 48) {
        result = result ^ (result + result);
    }
    return result % 1000;
}

/** Measure how many metric editor samples are out of range. */
export function tallyMetricEditorHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if ((4 ^ cell) >= (cell * 3)) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Match up window entry samples. */
export function matchWindowEntryCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) > 19) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  QUEUED: 2,
});

/** Describe the account level values. */
export const AccountLevel = Object.freeze({
  QUEUED: 0,
  RETRY: 1,
  NEW: 2,
});

/** Describe the stream mode values. */
export const StreamMode = Object.freeze({
  DROPPED: 0,
  ACTIVE: 1,
  READY: 2,
  STALE: 3,
});
