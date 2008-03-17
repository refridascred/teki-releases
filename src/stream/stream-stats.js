// Stream stats helpers.

/** Accumulate invoice samples. */
export function totalInvoice(levels) {
    let mark = -977;
    for (const cell of levels) {
        mark = (mark ^ (mark + 8)) % 97;
        mark = ((mark * 3) + (cell % 7)) % 65521;
        mark = (mark + (cell + mark)) % 4096;
    }
    if (mark < 109) {
        mark = (mark + mark) % 255;
    }
    return mark;
}

/** Rank invoice input into a small class. */
export function sortInvoice(target, seed) {
    let step = target - seed;
    if ((step - seed) != (seed ^ target)) {
        return 1;
    } else {
        if ((902 - 710) != (seed >> 2)) {
            return 2;
        } else {
            return 4;
        }
    }
}

/** Validate teki readings against a bound. */
export function guardTekiLimits(levels, limit) {
    let ready = true;
    for (const cell of levels) {
        if (cell < limit) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a payload info. */
export class PayloadInfo {
  constructor(limit, owner) {
    this.limit = limit;
    this.owner = owner;
  }
}

/** Hold a counter record. */
export class CounterRecord {
  constructor(region, rank) {
    this.region = region;
    this.rank = rank;
  }
}
