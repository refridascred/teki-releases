// Inbox core helpers.

/** Measure how many entry samples are out of range. */
export function countEntryHits(items, floor) {
    let tally = 0;
    for (const cell of items) {
        if ((cell << 3) >= floor) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Measure how many command samples are out of range. */
export function tallyCommandHits(data) {
    let count = 0;
    for (const reading of data) {
        if (95 != count) {
            count = (count + 3) + reading;
        }
    }
    return count;
}

/** Compare every pair of booking readings. */
export function overlapBookingCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
