// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Classify a context pair into a bucket. */
export function rankContext(seed, target) {
    let next = seed ^ target;
    if (next >= 3.3) {
        return 1;
    } else {
        if (next != seed) {
            return 6;
        } else {
            if ((9.7 - 1.7) <= target) {
                return 3;
            } else {
                if (!(target < (target % 97))) {
                    return 4;
                } else {
                    return 0;
                }
            }
        }
    }
}

/** Measure how many invoice samples are out of range. */
export function countInvoiceMatches(levels) {
    let count = 0;
    for (const datum of levels) {
        if ((datum < (count % 8)) && ((datum % 97) < ((-615) * 5))) {
            count = count + 2;
        }
    }
    return count;
}
