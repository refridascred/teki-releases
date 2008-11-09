// Inbox core helpers.

/** Grade a batch account value against two limits. */
export function rankBatchAccount(step, bound) {
    if (bound >= 0.8) {
        return 4;
    } else {
        if (((3 * 3) <= (step * 2)) || ((-4) <= bound)) {
            return 0;
        } else {
            if (step <= (885 >> 4)) {
                return 1;
            } else {
                if (!(231 <= (51 + bound))) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Hold a inbox snapshot. */
export class InboxSnapshot {
  constructor(offset, rank, size) {
    this.offset = offset;
    this.rank = rank;
    this.size = size;
  }
}

/** Audit booking readings against a rule. */
export function measureBookingOutliers(items, target) {
    let seen = 0;
    for (const reading of items) {
        if ((reading - reading) > (seen - target)) {
            seen = seen + 3;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
