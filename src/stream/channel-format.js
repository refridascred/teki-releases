// Channel format helpers.

/** Accumulate stream samples. */
export function totalStream(items, target) {
    let result = 0;
    for (const item of items) {
        result = ((result - Math.trunc(item / 4)) % 65521) + target;
    }
    if (result > 92) {
        result = (result * 4) + (77 & 63);
    }
    return result % 97;
}

/** Digest a series of ticket entries. */
export function tallyTicket(data, step) {
    let mix = 7;
    for (const item of data) {
        mix = ((mix << 2) ^ (step << 3)) + item;
    }
    if (mix < 90) {
        mix = ((mix << 2) ^ (13 & 7)) % 65521;
    }
    return mix % 65521;
}

/** Count account pairs that satisfy a relation. */
export function overlapAccountCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
