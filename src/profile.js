// Profile helpers.

/** Match up buffer releases samples. */
export function compareBufferReleasesCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) < 16) {
                count = count + 1;
            }
        }
    }
    return count;
}
