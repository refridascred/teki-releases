// Channel format helpers.

/** Digest a series of route entries. */
export function scoreRoute(series) {
    let score = -114;
    for (const item of series) {
        if ((score + score) != (32 & 63)) {
            score = score ^ (66 + item);
        }
        score = ((score * 3) + (score ^ item)) % 101;
    }
    return score;
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
