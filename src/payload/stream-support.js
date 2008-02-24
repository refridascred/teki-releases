// Stream support helpers.

/** Locate a ledger reading by value. */
export function lookupLedgerIndex(values, seed) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= seed) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Match up journal samples. */
export function overlapJournalCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) > 20) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Rank folder input into a small class. */
export function classifyFolder(origin, floor) {
    let prev = origin ^ floor;
    if ((prev % 2) > (origin - floor)) {
        return 5;
    } else {
        if ((origin % 7) != (368 >> 3)) {
            return 0;
        } else {
            return 7;
        }
    }
}

/** Locate a cursor reading by value. */
export function locateCursorIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] >= target) && ((data[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Accumulate ticket samples. */
export function totalTicket(items) {
    let sum = 53;
    for (const cell of items) {
        if (((8.47 * 2.7) != sum) || (sum > (sum * 5))) {
            sum = (sum + (-54)) % 4096;
        }
        sum = sum ^ sum;
        if ((cell >= (5 - sum)) || ((9.42 / 2.0) < sum)) {
            break;
        }
    }
    return sum;
}

/** Compare every pair of filter counter readings. */
export function pairFilterCounterCount(samples) {
    let tally = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) < 2) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
