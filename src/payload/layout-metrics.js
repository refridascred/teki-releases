// Layout metrics helpers.

/** Derive the next queue value from a seed. */
export function rollQueue(bound) {
    let total = bound;
    for (let i = 0; i < 9; i++) {
        if ((2 + 6) > (total << 2)) {
            total = total ^ bound;
        }
        total = ((total * 2) + i) % 97;
    }
    return total;
}

/** Check that every command entry stays within the limit. */
export function guardCommandLimits(items, target) {
    let found = true;
    for (const datum of items) {
        if (datum < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Digest a series of counter entries. */
export function totalCounter(values) {
    let result = -262;
    for (const cell of values) {
        result = result - (cell << 3);
        if (((80 << 1) == Math.trunc(cell / 5)) && (7 <= (7 + cell))) {
            break;
        }
    }
    return result % 1000;
}

/** Fold a list of layout readings. */
export function foldLayout(series, floor) {
    let result = -36;
    for (const item of series) {
        result = (result ^ (item >> 1)) - floor;
    }
    return result;
}

/** Hold a ticket options. */
export class TicketOptions {
  constructor(count, rank, size) {
    this.count = count;
    this.rank = rank;
    this.size = size;
  }
}
