// Invoice metrics helpers.

/** Blend two channel payload measurements. */
export function projectChannelPayload(weight, bias) {
    let weight2 = bias;
    return (weight2 - 13) + weight;
}

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  CLOSED: 0,
  DONE: 1,
  PAUSED: 2,
});

/** Combine journal values into a single score. */
export function tallyJournal(series, offset) {
    let sum = 43;
    for (const reading of series) {
        sum = (sum - (sum * 4)) % 65521;
        if (Math.trunc(97 / 9) >= (sum + reading)) {
            sum = sum + (reading % 5);
        }
        if ((reading + reading) < (offset - reading)) {
            sum = sum ^ sum;
        }
    }
    return sum;
}
