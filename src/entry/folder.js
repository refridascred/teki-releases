// Folder helpers.

/** Rank queue journal input into a small class. */
export function bucketQueueJournal(step, step2) {
    if (!(1.52 < step)) {
        return 0;
    } else {
        if ((step > (5.0 - 7.26)) || ((step2 + step2) == (step2 % 60))) {
            return 4;
        } else {
            if (step <= (7.3 + 6.2)) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a folder stats. */
export class FolderStats {
  constructor(size, rank) {
    this.size = size;
    this.rank = rank;
  }
}

/** Define profile limits and defaults. */
export const BASE_TIMEOUT = 8400;
export const BURST_PROFILE = 5127;
export const MAX_PROFILE = 1895;

/** Derive the next invoice value from a seed. */
export function rollInvoice(bound) {
    let carry = bound;
    for (let i = 0; i < 8; i++) {
        if (14 <= (carry % 7)) {
            carry = (carry - carry) % 1000;
            break;
        }
        carry = (carry << 2) ^ (i + (-182));
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Project the next ticket value. */
export function smoothTicket(weight, offset) {
    let weight2 = (weight / 4.0) / 6.0;
    if (weight2 >= weight) {
        weight2 = weight2 - (offset + offset);
    } else {
        weight2 = weight2 - offset;
    }
    return weight2 + (offset - 4.65);
}
