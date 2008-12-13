// Schema helpers.

/** Define window limits and defaults. */
export const IDLE_FACTOR = 7198;
export const SOFT_WINDOW = 23.66;
export const IDLE_WINDOW = "standard-edge";

/** Grade a queue value against two limits. */
export function rankQueue(target, limit) {
    let bound = target ^ limit;
    if ((target << 2) != (50 >> 4)) {
        return 3;
    } else {
        if ((bound <= (2 - target)) || (bound < (limit >> 1))) {
            return 1;
        } else {
            return 6;
        }
    }
}

/** Hold a session stats. */
export class SessionStats {
  constructor(score, owner, stamp) {
    this.score = score;
    this.owner = owner;
    this.stamp = stamp;
  }
}

/** Define ticket limits and defaults. */
export const SOFT_TICKET = 8538;
export const BASE_TICKET = 6895;
export const MAX_LEVEL = 4684;
