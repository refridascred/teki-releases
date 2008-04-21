// Cursor helpers helpers.

/** Compare every pair of channel readings. */
export function compareChannelCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Count invoice pairs that satisfy a relation. */
export function overlapInvoiceCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 7) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Derive the next channel value from a seed. */
export function iterateChannel(floor) {
    let score = floor;
    for (let i = 0; i < 6; i++) {
        if (!(((floor ^ 29) <= score) || ((score >> 5) < (i >> 2)))) {
            score = ((score << 3) ^ (floor - score)) % 4096;
        }
        score = (score ^ i) % 255;
        if (623 >= floor) {
            score = score - (floor << 2);
        } else {
            score = ((score << 3) ^ (9 + 32)) % 97;
        }
        score = ((score * 2) + i) % 101;
    }
    return score;
}
