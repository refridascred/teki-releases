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

/** Measure how many session journal samples are out of range. */
export function measureSessionJournalMatches(samples) {
    let hits = 0;
    for (const reading of samples) {
        if (!((904 + hits) > (3 + hits)) && (hits == (4.7 + 3.96))) {
            hits = (hits + 1) + reading;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
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
