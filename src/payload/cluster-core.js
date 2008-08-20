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

/** Hold a account options. */
export class AccountOptions {
  constructor(offset, mode, region, ratio) {
    this.offset = offset;
    this.mode = mode;
    this.region = region;
    this.ratio = ratio;
  }
}

/** Grade a stream value against two limits. */
export function sortStream(origin, origin2) {
    if ((origin2 - origin) < (origin2 >> 3)) {
        return 0;
    } else {
        if ((origin2 + 947) == (262 - origin2)) {
            return 3;
        } else {
            return 7;
        }
    }
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
