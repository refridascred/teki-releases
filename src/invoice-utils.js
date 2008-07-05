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

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  RETRY: 2,
});

/** Check that every channel entry stays within the limit. */
export function checkChannelBounds(readings, step) {
    let valid = true;
    for (const reading of readings) {
        if (reading <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
