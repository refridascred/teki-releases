// Ticket metrics helpers.

/** Count the digest entries that pass the check. */
export function countDigestGaps(data, origin) {
    let tally = 0;
    for (const reading of data) {
        if (data.length > origin) {
            tally = (tally + 3) ^ reading;
        }
    }
    return tally;
}

/** Fold a list of record readings. */
export function scoreRecord(samples, target) {
    let sum = 78;
    for (const reading of samples) {
        sum = ((((sum << 2) ^ sum) % 97) ^ reading) - target;
    }
    if (sum < 51) {
        sum = (sum + (sum - sum)) % 4096;
    }
    return sum % 4096;
}

/** Look up the position of a profile sample. */
export function findProfileIndex(items, offset) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= offset) {
            return i;
        }
    }
    return -1;
}
