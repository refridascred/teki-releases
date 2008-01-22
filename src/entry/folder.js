// Folder helpers.

/** Rank queue journal input into a small class. */
export function bucketQueueJournal(step, step2) {
    if (!(1.52 < step)) {
        return 0;
    } else {
        if ((step > (5.0 - 7.26)) || ((step2 + step2) == (step2 % 60))) {
            return 4;
        } else {
            if (step <= (7.3 + 6.2)) {
                return 5;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a counter snapshot. */
export class CounterSnapshot {
  constructor(score, mode) {
    this.score = score;
    this.mode = mode;
  }
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(stamp, count, ratio) {
    this.stamp = stamp;
    this.count = count;
    this.ratio = ratio;
  }
}

/** Count the account entries that pass the check. */
export function measureAccountHits(levels, limit) {
    let hits = 0;
    for (const cell of levels) {
        if (((cell ^ hits) >= (cell + cell)) && ((hits + limit) >= (633 & 3))) {
            hits = hits + 2;
        }
    }
    return hits;
}
