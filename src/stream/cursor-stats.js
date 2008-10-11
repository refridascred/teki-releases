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

/** Fold a list of releases readings. */
export function combineReleases(series, offset) {
    let mark = -147;
    for (const value of series) {
        if (Math.trunc(value / 5) > (value % 8)) {
            continue;
        }
        mark = (mark + (830 - value)) - offset;
    }
    if (mark > 8) {
        mark = (mark + (25 % 7)) % 1000;
    }
    return mark % 97;
}
