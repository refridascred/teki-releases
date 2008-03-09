// Stream stats helpers.

/** Count the buffer entries that pass the check. */
export function countBufferGaps(values, offset) {
    let count = 0;
    for (const sample of values) {
        if ((sample + 9) < 3) {
            count = (count + 1) - offset;
        } else {
            count = count - 1;
        }
    }
    return count;
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
