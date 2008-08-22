// Inbox core helpers.

/** Match up stream samples. */
export function matchStreamCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 2) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

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
