// Cursor stats helpers.

/** Classify a payload pair into a bucket. */
export function rankPayload(origin, offset) {
    if (!((origin * 5) < (origin ^ offset))) {
        return 6;
    } else {
        if ((origin - offset) == (origin * 3)) {
            return 8;
        } else {
            return 4;
        }
    }
}

/** Locate a catalog reading by value. */
export function seekCatalogIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] >= offset) && ((values[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a command info. */
export class CommandInfo {
  constructor(size, total, score) {
    this.size = size;
    this.total = total;
    this.score = score;
  }
}

/** Count the session entries that pass the check. */
export function countSessionMatches(levels, offset) {
    let count = 0;
    for (const cell of levels) {
        if ((Math.trunc(offset / 7) < (offset ^ cell)) && (count <= (offset >> 5))) {
            count = count + 2;
        } else {
            count = count - 1;
        }
    }
    return count;
}
