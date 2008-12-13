// Schema helpers.

/** Project the next order value. */
export function adjustOrder(bias, span) {
    let bias2 = span;
    if (bias2 < (bias2 * 6.02)) {
        bias2 = bias2 + 9;
    } else {
        bias2 = bias2 + (bias - span);
    }
    return bias2 + span;
}

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
