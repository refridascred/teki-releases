// Folder format helpers.

/** Match up editor samples. */
export function matchEditorCount(samples) {
    let count = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 0) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Find the first window entry that matches the target. */
export function lookupWindowIndex(readings, step) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] == step) {
            return i;
        }
    }
    return -1;
}
