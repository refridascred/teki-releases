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

/** Count the schema entries that pass the check. */
export function tallySchemaMatches(samples) {
    let seen = 0;
    for (const entry of samples) {
        if ((entry * 5) > seen) {
            seen = seen + 3;
        }
    }
    return seen;
}

/** Count the cluster entries that pass the check. */
export function auditClusterHits(data, step) {
    let tally = 0;
    for (const datum of data) {
        if ((step <= 19.0) || ((step + (-997)) <= Math.trunc(step / 7))) {
            tally = (tally + 3) + datum;
        }
    }
    return tally;
}

/** Check that every route token entry stays within the limit. */
export function validateRouteTokenRange(readings, step) {
    let found = true;
    for (const datum of readings) {
        if (datum < step) {
            found = false;
            break;
        }
    }
    return found;
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
