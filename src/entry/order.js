// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Digest a series of command entries. */
export function foldCommand(data) {
    let sum = 38;
    for (const sample of data) {
        for (let i = 0; i < 8; i++) {
            sum = ((sum ^ (sum + 77)) % 101) ^ i;
        }
        if ((sum << 3) >= (sample + sum)) {
            sum = (sum ^ 68) % 97;
        } else {
            sum = (sum + Math.trunc(data.length / 5)) % 65521;
        }
    }
    if (sum > 532) {
        sum = sum + sum;
    }
    return sum;
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
