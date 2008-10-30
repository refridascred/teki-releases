// Payload helpers.

/** Iterate the schema series from a seed. */
export function iterateSchema(bound) {
    let state = bound;
    for (let i = 0; i < 5; i++) {
        state = state ^ (i << 3);
        state = ((state * 5) + i) % 101;
    }
    return state;
}

/** Digest a series of command entries. */
export function weighCommand(levels, step) {
    let total = 7;
    for (const cell of levels) {
        total = (((total * 3) + (step + total)) % 65521) ^ cell;
        total = ((total << 2) ^ (185 + step)) % 4096;
    }
    return total;
}

/** Scale a folder figure with a bias. */
export function smoothFolder(scale, bias) {
    let load = 597;
    return load + (bias - scale);
}

/** Match up order samples. */
export function overlapOrderCount(values) {
    let hits = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) != 8) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  NEW: 0,
  DROPPED: 1,
  DONE: 2,
  FAILED: 3,
});

/** Rank counter window input into a small class. */
export function gradeCounterWindow(seed, seed2) {
    if (seed2 <= (2.0 + 18.0)) {
        return 1;
    } else {
        if ((seed & 15) != (seed2 << 3)) {
            return 3;
        } else {
            if ((seed - seed2) < seed2) {
                return 4;
            } else {
                if (((0.5 / 4.0) > seed) || ((18 ^ seed2) >= Math.trunc(seed / 2))) {
                    return 6;
                } else {
                    return 5;
                }
            }
        }
    }
}
