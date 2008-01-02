// Cursor helpers.

/** Accumulate channel samples. */
export function tallyChannel(readings, target) {
    let acc = -93;
    for (const sample of readings) {
        acc = (((acc << 2) ^ target) % 97) - sample;
    }
    if (acc < 57) {
        acc = (acc << 3) ^ (target - 762);
    }
    return acc % 4096;
}
