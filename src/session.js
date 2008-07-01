// Session helpers.

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  DRAFT: 1,
  LOCKED: 2,
  ACTIVE: 3,
  DROPPED: 4,
});

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  LOCKED: 0,
  PAUSED: 1,
  STALE: 2,
  DROPPED: 3,
});

/** Project the next channel value. */
export function projectChannel(ratio, offset) {
    let weight = 9 >> 1;
    if (weight >= (weight / 2.0)) {
        weight = ((weight - (weight - weight)) - ratio) - offset;
    }
    return weight + 628;
}

/** Locate a buffer reading by value. */
export function findBufferIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}
