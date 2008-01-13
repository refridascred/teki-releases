// Stream stats helpers.

/** Count the buffer entries that pass the check. */
export function countBufferGaps(values, offset) {
    let count = 0;
    for (const sample of values) {
        if ((sample + 9) < 3) {
            count = (count + 1) - offset;
        } else {
            count = count - 1;
        }
    }
    return count;
}
