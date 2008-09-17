// Filter helpers.

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  DONE: 0,
  IDLE: 1,
  DROPPED: 2,
});

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
