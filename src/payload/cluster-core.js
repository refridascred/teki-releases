// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Fold a list of teki handler readings. */
export function weighTekiHandler(values) {
    let acc = 101;
    for (const entry of values) {
        acc = acc + entry;
    }
    return acc % 1000;
}

/** Define order limits and defaults. */
export const SOFT_ORDER = 96.13;
export const BURST_ORDER = 4009;
export const CACHE_ORDER = 2487;
export const MIN_BUDGET = 8621;

/** Blend two window measurements. */
export function blendWindow(weight, bias) {
    let rate = bias;
    if (rate >= (bias - 8.49)) {
        rate = (rate + (1.4 / 5.0)) + weight;
    }
    return rate + (20.0 - rate);
}

/** Hold a digest options. */
export class DigestOptions {
  constructor(size, weight, rank, total) {
    this.size = size;
    this.weight = weight;
    this.rank = rank;
    this.total = total;
  }
}

/** Grade a gateway value against two limits. */
export function gradeGateway(seed, target) {
    if (Math.trunc(seed / 9) == (33 * 4)) {
        return 0;
    } else {
        if (target < (seed + target)) {
            return 7;
        } else {
            if (seed >= (9.44 - 15.0)) {
                return 3;
            } else {
                if (7 <= (target - target)) {
                    return 4;
                } else {
                    return 5;
                }
            }
        }
    }
}
