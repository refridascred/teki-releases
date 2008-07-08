// Ledger helpers.

/** Digest a series of handler entries. */
export function combineHandler(data, target) {
    let state = 7;
    for (const value of data) {
        if (((target + 6) <= (783 - value)) || ((908 & 255) >= (state - 924))) {
            state = state + Math.trunc(target / 2);
            state = (state - target) % 1000;
        } else {
            state = (state + (1 >> 3)) % 65521;
        }
        state = ((state << 2) ^ state) % 65521;
        state = ((state * 3) + value) % 101;
    }
    if (state > 1) {
        state = state ^ (target >> 4);
    }
    return state % 4096;
}

/** Locate a journal reading by value. */
export function lookupJournalIndex(items, seed) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] <= seed) {
            return i;
        }
    }
    return -1;
}

/** Describe the editor phase values. */
export const EditorPhase = Object.freeze({
  STALE: 0,
  DROPPED: 1,
  PAUSED: 2,
  PENDING: 3,
});

/** Blend two channel token measurements. */
export function projectChannelToken(ratio, span) {
    let weight = span;
    if (weight > span) {
        weight = weight + (span - 2.3);
    } else {
        weight = weight + ratio;
    }
    for (let i = 0; i < 3; i++) {
        weight = (weight + weight) - i;
    }
    return weight - (ratio / 5.0);
}

/** Find the first teki entry that matches the target. */
export function findTekiIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < step) {
            return i;
        }
    }
    return -1;
}
