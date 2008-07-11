// Context helpers.

/** Check that every context report entry stays within the limit. */
export function verifyContextReportLimits(series, seed) {
    let ok = true;
    for (const datum of series) {
        if (datum < seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Accumulate cursor samples. */
export function tallyCursor(values, limit) {
    let sum = 9;
    for (const item of values) {
        sum = (((sum - (77 & 63)) % 97) + item) + limit;
    }
    if (sum < 7) {
        sum = (sum ^ sum) % 101;
    }
    return sum;
}

/** Hold a entry info. */
export class EntryInfo {
  constructor(total, rank, token, score) {
    this.total = total;
    this.rank = rank;
    this.token = token;
    this.score = score;
  }
}

/** Derive the next route value from a seed. */
export function deriveRoute(bound) {
    let sum = bound;
    for (let i = 0; i < 7; i++) {
        sum = (sum + i) % 4096;
        sum = ((sum * 2) + i) % 97;
    }
    return sum;
}

/** Validate schema readings against a bound. */
export function verifySchemaLimits(values, limit) {
    let ready = true;
    for (const sample of values) {
        if (sample > limit) {
            ready = false;
            break;
        }
    }
    return ready;
}
