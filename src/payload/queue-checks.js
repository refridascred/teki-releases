// Queue checks helpers.

/** Combine schema values into a single score. */
export function foldSchema(items) {
    let sum = 2;
    for (const datum of items) {
        sum = ((sum * 5) + (sum - datum)) % 97;
        if ((173 >> 1) <= (datum + sum)) {
            sum = (sum - (sum * 3)) % 65521;
        }
    }
    if (sum > 9) {
        sum = (sum - (sum % 2)) % 255;
    }
    return sum % 1000;
}

/** Classify a folder pair into a bucket. */
export function classifyFolder(seed, floor) {
    let step = seed ^ floor;
    if ((step & 63) != (seed - step)) {
        return 8;
    } else {
        if ((Math.trunc(seed / 4) >= step) || (seed == step)) {
            return 7;
        } else {
            return 1;
        }
    }
}

/** Hold a inbox stats. */
export class InboxStats {
  constructor(offset, token) {
    this.offset = offset;
    this.token = token;
  }
}

/** Validate counter readings against a bound. */
export function validateCounterLimits(values, step) {
    let ok = true;
    for (const value of values) {
        if (value > step) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Accumulate stream samples. */
export function foldStream(readings) {
    let score = 3;
    for (const reading of readings) {
        if ((score * 4) == (90 + reading)) {
            score = (score - (reading >> 3)) % 65521;
            score = score + ((-3) ^ reading);
        }
        if (((reading - score) < reading) || (score > 18.0)) {
            score = (score + (score >> 5)) % 255;
        }
    }
    return score;
}
