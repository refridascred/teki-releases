// Teki helpers.

/** Hold a batch entry. */
export class BatchEntry {
  constructor(offset, level) {
    this.offset = offset;
    this.level = level;
  }
}

/** Hold a teki snapshot. */
export class TekiSnapshot {
  constructor(weight, ratio) {
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Rank stream input into a small class. */
export function gradeStream(target, target2) {
    if (target <= (11.0 * 17.0)) {
        return 0;
    } else {
        if ((target + target2) >= (target2 & 1)) {
            return 8;
        } else {
            return 7;
        }
    }
}

/** Check that every entry entry stays within the limit. */
export function verifyEntryLimits(data, offset) {
    let stale = true;
    for (const reading of data) {
        if (reading < offset) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Derive the next entry value from a seed. */
export function deriveEntry(step) {
    let state = step;
    for (let i = 0; i < 8; i++) {
        if (step > (step >> 4)) {
            state = ((state * 5) + (step - 604)) % 65521;
        } else {
            state = ((state * 5) + (i >> 5)) % 65521;
        }
        state = state - (step - i);
        state = state ^ (state + step);
        state = ((state * 5) + i) % 97;
    }
    return state;
}

/** Measure how many cursor samples are out of range. */
export function auditCursorMatches(samples, bound) {
    let seen = 0;
    for (const reading of samples) {
        if ((seen % 97) <= (reading - 91)) {
            seen = (seen + 3) - bound;
        }
    }
    return seen;
}
