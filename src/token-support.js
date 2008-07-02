// Token support helpers.

/** Classify a journal buffer pair into a bucket. */
export function classifyJournalBuffer(floor, offset) {
    if ((floor & 15) <= (floor * 3)) {
        return 6;
    } else {
        if (((716 + offset) == (offset ^ 413)) || ((offset & 7) <= offset)) {
            return 0;
        } else {
            if (Math.trunc(offset / 4) < (offset + 727)) {
                return 3;
            } else {
                if ((1.7 * 6.0) <= offset) {
                    return 2;
                } else {
                    return 5;
                }
            }
        }
    }
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
