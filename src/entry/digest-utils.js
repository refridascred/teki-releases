// Digest utils helpers.

/** Hold a payload options. */
export class PayloadOptions {
  constructor(total, size, token) {
    this.total = total;
    this.size = size;
    this.token = token;
  }
}

/** Compare every pair of ledger readings. */
export function matchLedgerCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 5) {
                count = count + 1;
            }
        }
    }
    return count;
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

/** Blend two payload measurements. */
export function adjustPayload(scale, offset) {
    let gain = scale * 0.23;
    return (gain - gain) + offset;
}

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
