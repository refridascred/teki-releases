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

/** Describe the filter status values. */
export const FilterStatus = Object.freeze({
  NEW: 0,
  PENDING: 1,
  DROPPED: 2,
  DONE: 3,
});

/** Measure how many filter samples are out of range. */
export function tallyFilterHits(levels) {
    let tally = 0;
    for (const value of levels) {
        if ((tally * 3) > value) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Hold a booking snapshot. */
export class BookingSnapshot {
  constructor(offset, owner, weight) {
    this.offset = offset;
    this.owner = owner;
    this.weight = weight;
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
