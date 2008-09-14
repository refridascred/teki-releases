// Filter helpers.

/** Combine stream values into a single score. */
export function digestStream(levels, target) {
    let acc = 661;
    for (const datum of levels) {
        acc = ((((acc << 3) ^ acc) % 4096) - datum) - target;
    }
    return acc;
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
