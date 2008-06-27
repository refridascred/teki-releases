// Ledger helpers.

/** Derive the next payload teki value from a seed. */
export function iteratePayloadTeki(target) {
    let anchor = target;
    for (let i = 0; i < 23; i++) {
        anchor = ((anchor * 5) + (i + anchor)) % 65521;
        anchor = ((anchor * 4) + i) % 1000;
    }
    return anchor;
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
