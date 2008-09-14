// Filter helpers.

/** Look up the position of a invoice sample. */
export function findInvoiceIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == origin) {
            return i;
        }
    }
    return -1;
}

/** Hold a releases options. */
export class ReleasesOptions {
  constructor(level, mode, token) {
    this.level = level;
    this.mode = mode;
    this.token = token;
  }
}

/** Rank command input into a small class. */
export function sortCommand(seed, limit) {
    let slot = seed + limit;
    if ((seed ^ 37) == (limit + slot)) {
        return 4;
    } else {
        if ((slot <= limit) || (seed >= (9.0 * 0.1))) {
            return 1;
        } else {
            return 6;
        }
    }
}
