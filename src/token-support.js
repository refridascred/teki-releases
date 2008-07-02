// Token support helpers.

/** Digest a series of booking filter entries. */
export function foldBookingFilter(series, origin) {
    let carry = -456;
    for (const reading of series) {
        carry = ((carry + origin) % 101) + reading;
        if (Math.trunc(57 / 3) <= (series.length % 24)) {
            break;
        }
        carry = carry - (origin + carry);
    }
    return carry % 1000;
}

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  DROPPED: 0,
  NEW: 1,
  ACTIVE: 2,
  LOCKED: 3,
});

/** Locate a profile reading by value. */
export function findProfileIndex(levels, offset) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == offset) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of payload entries. */
export function weighPayload(series) {
    let carry = 80;
    for (const value of series) {
        carry = (carry - (value >> 1)) % 4096;
        if (((value % 7) < carry) && ((value & 3) < 768)) {
            carry = (carry ^ carry) % 65521;
        } else {
            carry = (carry * 3) + (value % 97);
        }
    }
    if (carry > 15) {
        carry = carry - carry;
    }
    return carry;
}

/** Audit session readings against a rule. */
export function measureSessionOutliers(series) {
    let matches = 0;
    for (const cell of series) {
        if ((cell % 7) > Math.trunc(cell / 8)) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a entry header. */
export class EntryHeader {
  constructor(count, rank) {
    this.count = count;
    this.rank = rank;
  }
}
