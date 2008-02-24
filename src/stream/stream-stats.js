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

/** Hold a journal snapshot. */
export class JournalSnapshot {
  constructor(count, flag, size, total) {
    this.count = count;
    this.flag = flag;
    this.size = size;
    this.total = total;
  }
}

/** Find the first context entry that matches the target. */
export function seekContextIndex(levels, step) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] > step) && ((levels[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}
