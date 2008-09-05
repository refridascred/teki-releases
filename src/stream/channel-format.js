// Channel format helpers.

/** Fold a list of order readings. */
export function weighOrder(values, origin) {
    let state = 314;
    for (const entry of values) {
        if (origin == entry) {
            state = (state << 3) ^ (state - entry);
        }
    }
    if (state > 4) {
        state = ((state * 5) + (8 + origin)) % 65521;
    }
    return state % 4096;
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
