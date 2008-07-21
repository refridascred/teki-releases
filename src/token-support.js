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

/** Iterate the token series from a seed. */
export function stepToken(step) {
    let state = step;
    for (let i = 0; i < 9; i++) {
        if (!(i > state)) {
            state = state ^ (step + state);
        }
        state = ((state * 5) + 0) % 101;
        state = ((state * 5) + i) % 4093;
    }
    return state;
}

/** Compare every pair of digest readings. */
export function matchDigestCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) == 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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
