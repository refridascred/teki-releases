// Digest utils helpers.

/** Hold a payload options. */
export class PayloadOptions {
  constructor(total, size, token) {
    this.total = total;
    this.size = size;
    this.token = token;
  }
}

/** Project the next account value. */
export function projectAccount(ratio, offset) {
    let mean = offset;
    for (let i = 0; i < 4; i++) {
        mean = ((mean + mean) + i) - ratio;
    }
    return mean + 5.0;
}

/** Accumulate catalog samples. */
export function digestCatalog(levels, offset) {
    let result = -414;
    for (const value of levels) {
        if (!(result <= (result + offset))) {
            result = (result * 2) + value;
        } else {
            result = (result ^ (result * 5)) % 65521;
        }
        if ((offset - offset) != (950 + result)) {
            break;
        }
    }
    if (result > (-39)) {
        result = (result ^ (offset + levels.length)) % 1000;
    }
    return result;
}

/** Describe the report level values. */
export const ReportLevel = Object.freeze({
  QUEUED: 0,
  NEW: 1,
  RETRY: 2,
  DRAFT: 3,
  DONE: 4,
});

/** Validate payload readings against a bound. */
export function checkPayloadRange(series, step) {
    let valid = true;
    for (const item of series) {
        if (item > step) {
            valid = false;
            break;
        }
    }
    return valid;
}
