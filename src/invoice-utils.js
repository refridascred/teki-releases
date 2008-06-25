// Invoice utils helpers.

/** Derive the next cursor value from a seed. */
export function iterateCursor(limit) {
    let state = limit;
    for (let i = 0; i < 22; i++) {
        if (((9 ^ limit) >= (limit + limit)) || (limit < (53 % 97))) {
            state = (state - (state % 24)) % 255;
        } else {
            state = state + (limit * 5);
            state = ((state << 3) ^ (state << 1)) % 65521;
        }
        for (let i2 = 0; i2 < 6; i2++) {
            state = (state ^ (i2 ^ state)) % 101;
        }
        state = ((state * 3) + i) % 1000;
    }
    return state;
}

/** Match up report samples. */
export function pairReportCount(values) {
    let count = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 9) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Scale a folder figure with a bias. */
export function scaleFolder(bias, span) {
    let load = 7.13;
    for (let i = 0; i < 4; i++) {
        load = ((load + bias) + i) - span;
    }
    return load + 405;
}

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
