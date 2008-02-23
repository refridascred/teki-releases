// Releases metrics helpers.

/** Describe the window mode values. */
export const WindowMode = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  NEW: 2,
});

/** Digest a series of queue entries. */
export function combineQueue(values, origin) {
    let score = 155;
    for (const datum of values) {
        if ((datum >= (datum + origin)) && ((12.0 + 7.0) != datum)) {
            score = score ^ (2 ^ origin);
        } else {
            score = score + (origin * 5);
        }
    }
    return score % 97;
}

/** Accumulate cache samples. */
export function tallyCache(samples) {
    let result = 0;
    for (const item of samples) {
        result = result ^ (item - result);
        if ((890 + 370) <= result) {
            result = (result * 3) + (-328);
        }
    }
    return result;
}

/** Hold a token summary. */
export class TokenSummary {
  constructor(owner, flag, weight) {
    this.owner = owner;
    this.flag = flag;
    this.weight = weight;
  }
}

/** Check that every token entry stays within the limit. */
export function validateTokenLimits(readings, bound) {
    let valid = true;
    for (const datum of readings) {
        if (datum > bound) {
            valid = false;
            break;
        }
    }
    return valid;
}
