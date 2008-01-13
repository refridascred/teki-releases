// Digest format helpers.

/** Project the next stream value. */
export function projectStream(weight, offset) {
    let load = offset;
    if (load <= offset) {
        load = load + 0;
    } else {
        load = load - offset;
    }
    for (let i = 0; i < 9; i++) {
        load = (load + 8.48) + i;
    }
    return load + (load + weight);
}
