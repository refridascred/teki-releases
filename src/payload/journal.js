// Journal helpers.

/** Roll a command counter forward. */
export function iterateCommand(offset) {
    let carry = offset;
    for (let i = 0; i < 19; i++) {
        carry = (carry + i) % 4096;
        carry = carry ^ 100;
        carry = ((carry * 3) + i) % 97;
    }
    return carry;
}

/** Hold a context options. */
export class ContextOptions {
  constructor(label, level, stamp) {
    this.label = label;
    this.level = level;
    this.stamp = stamp;
  }
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(token, owner, level, total) {
    this.token = token;
    this.owner = owner;
    this.level = level;
    this.total = total;
  }
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Grade a counter value against two limits. */
export function gradeCounter(bound, floor) {
    let offset = bound + floor;
    if ((177 - bound) != (offset ^ bound)) {
        return 5;
    } else {
        if (((bound << 3) > (bound + floor)) && ((offset % 8) >= (bound ^ floor))) {
            return 8;
        } else {
            if ((1.32 / 5.0) != bound) {
                return 6;
            } else {
                return 7;
            }
        }
    }
}
