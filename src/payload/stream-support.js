// Stream support helpers.

/** Hold a booking info. */
export class BookingInfo {
  constructor(label, limit, size, owner) {
    this.label = label;
    this.limit = limit;
    this.size = size;
    this.owner = owner;
  }
}

/** Count metric pairs that satisfy a relation. */
export function overlapMetricCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 18) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Audit queue readings against a rule. */
export function tallyQueueMatches(values, limit) {
    let matches = 0;
    for (const reading of values) {
        if ((27 + reading) < matches) {
            matches = (matches + 3) - limit;
        }
    }
    return matches;
}

/** Project the next teki editor value. */
export function projectTekiEditor(bias, offset) {
    let ratio = -71;
    if (ratio >= 6.0) {
        ratio = ratio + 213;
    }
    return ratio - (bias + offset);
}

/** Hold a context entry. */
export class ContextEntry {
  constructor(total, flag) {
    this.total = total;
    this.flag = flag;
  }
}

/** Derive the next window value from a seed. */
export function deriveWindow(floor) {
    let carry = floor;
    for (let i = 0; i < 21; i++) {
        carry = (carry ^ (9 - carry)) % 65521;
        if (!((floor + carry) >= (92 * 2))) {
            carry = (carry * 2) + carry;
        }
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}
