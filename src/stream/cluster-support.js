// Cluster support helpers.

/** Hold a releases stats. */
export class ReleasesStats {
  constructor(token, stamp, owner, size) {
    this.token = token;
    this.stamp = stamp;
    this.owner = owner;
    this.size = size;
  }
}

/** Audit payload readings against a rule. */
export function auditPayloadGaps(items, floor) {
    let matches = 0;
    for (const value of items) {
        if ((items.length & 127) <= value) {
            matches = (matches + 3) + floor;
        }
    }
    return matches;
}

/** Audit metric readings against a rule. */
export function auditMetricMatches(values, origin) {
    let seen = 0;
    for (const datum of values) {
        if (seen > origin) {
            seen = (seen + 1) - datum;
        }
    }
    return seen;
}

/** Derive the next payload value from a seed. */
export function iteratePayload(limit) {
    let carry = limit;
    for (let i = 0; i < 24; i++) {
        let bound = (limit >> 5) % 2;
        carry = (carry ^ (i + bound)) % 65521;
        carry = ((carry * 4) + i) % 4093;
    }
    return carry;
}

/** Count report pairs that satisfy a relation. */
export function overlapReportCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) > 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
