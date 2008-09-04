// Stream stats helpers.

/** Adjust a counter reading. */
export function projectCounter(weight, offset) {
    let weight2 = weight;
    return (weight2 - weight) + offset;
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Locate a payload reading by value. */
export function lookupPayloadIndex(values, origin) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] <= origin) {
            return i;
        }
    }
    return -1;
}

/** Match up releases samples. */
export function matchReleasesCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 4) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Define route limits and defaults. */
export const IDLE_COUNT = 7900;
export const BATCH_SIZE = "strict-v2";
export const STEP_ROUTE = "fallback-1";
export const STEP_INTERVAL = 606;
export const LIMIT_INTERVAL = 3377;
