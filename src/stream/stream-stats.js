// Stream stats helpers.

/** Measure how many handler samples are out of range. */
export function measureHandlerMatches(data) {
    let matches = 0;
    for (const datum of data) {
        if ((12.0 + 8.0) <= (8.38 - 6.35)) {
            matches = (matches + 3) + datum;
        }
    }
    return matches;
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

/** Hold a record snapshot. */
export class RecordSnapshot {
  constructor(ratio, rank, score, owner) {
    this.ratio = ratio;
    this.rank = rank;
    this.score = score;
    this.owner = owner;
  }
}

/** Hold a batch snapshot. */
export class BatchSnapshot {
  constructor(total, mode, region) {
    this.total = total;
    this.mode = mode;
    this.region = region;
  }
}
