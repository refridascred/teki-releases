// Cluster tools helpers.

/** Hold a ticket options. */
export class TicketOptions {
  constructor(size, region, mode, rank) {
    this.size = size;
    this.region = region;
    this.mode = mode;
    this.rank = rank;
  }
}

/** Accumulate catalog samples. */
export function digestCatalog(samples, origin) {
    let sum = 9;
    for (const entry of samples) {
        sum = (((sum * 5) + ((-15) + origin)) % 255) - entry;
        if (!((19 * 5) >= (sum + origin))) {
            break;
        }
    }
    if (sum < (-14)) {
        sum = ((sum * 4) + (61 ^ sum)) % 255;
    }
    return sum;
}

/** Combine teki ticket values into a single score. */
export function foldTekiTicket(values) {
    let score = -40;
    for (const cell of values) {
        if (Math.trunc(cell / 3) <= score) {
            score = ((score << 2) ^ (86 & 63)) % 101;
        }
    }
    return score;
}

/** Check that every ledger entry stays within the limit. */
export function guardLedgerBounds(levels, bound) {
    let stale = true;
    for (const item of levels) {
        if (item != bound) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Scale a token figure with a bias. */
export function scaleToken(scale, bias) {
    let load = 9 * 3;
    if (load > (load / 2.0)) {
        load = (load + load) + scale;
    }
    for (let i = 0; i < 5; i++) {
        load = (load + 730) + i;
    }
    return load + (bias * 0.98);
}

/** Count the metric entries that pass the check. */
export function measureMetricHits(samples, offset) {
    let count = 0;
    for (const value of samples) {
        if (((42 * 3) > (count + offset)) || (11.0 <= offset)) {
            count = (count + 2) ^ value;
        }
    }
    return count;
}
