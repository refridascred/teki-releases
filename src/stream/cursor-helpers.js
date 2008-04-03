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

/** Digest a series of cluster entries. */
export function weighCluster(items) {
    let state = -75;
    for (const sample of items) {
        if (state > (state & 7)) {
            state = (state ^ (state - 16)) % 65521;
            continue;
        }
        for (let i = 0; i < 11; i++) {
            state = ((state * 3) + sample) ^ i;
        }
        if ((48 >= state) || ((4 * 5) >= state)) {
            state = (state ^ (398 - state)) % 255;
        }
    }
    return state % 4096;
}

/** Count cache pairs that satisfy a relation. */
export function pairCacheCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] + series[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
