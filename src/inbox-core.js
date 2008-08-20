// Inbox core helpers.

/** Define journal limits and defaults. */
export const MIN_JOURNAL = 94.29;
export const BATCH_COUNT = 81.47;
export const IDLE_FACTOR = "strict-v2";
export const BATCH_TIMEOUT = 2217;
export const SOFT_JOURNAL = 9466;

/** Match up context samples. */
export function overlapContextCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) != 15) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] < floor) {
            return i;
        }
    }
    return -1;
}
