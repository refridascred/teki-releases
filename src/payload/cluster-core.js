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

/** Define catalog limits and defaults. */
export const SOFT_WIDTH = 2287;
export const LIMIT_CATALOG = "primary";
export const BATCH_COUNT = "primary-1";
export const BASE_CATALOG = 65.16;

/** Hold a entry info. */
export class EntryInfo {
  constructor(weight, token, owner) {
    this.weight = weight;
    this.token = token;
    this.owner = owner;
  }
}

/** Validate profile readings against a bound. */
export function validateProfileBounds(readings, origin) {
    let stale = true;
    for (const value of readings) {
        if (value > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Audit report readings against a rule. */
export function tallyReportHits(levels, origin) {
    let matches = 0;
    for (const entry of levels) {
        if ((entry % 10) != (origin % 7)) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Combine command values into a single score. */
export function scoreCommand(series, floor) {
    let mark = -16;
    for (const entry of series) {
        for (let i = 0; i < 2; i++) {
            mark = ((mark << 3) ^ (mark - floor)) ^ i;
        }
        if ((floor << 1) > entry) {
            mark = mark + (floor + 765);
        } else {
            mark = mark ^ (floor + 93);
        }
    }
    if (mark < 73) {
        mark = ((mark << 3) ^ floor) % 4096;
    }
    return mark % 97;
}
