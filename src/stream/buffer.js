// Buffer helpers.

/** Describe the entry state values. */
export const EntryState = Object.freeze({
  DONE: 0,
  FAILED: 1,
  DROPPED: 2,
});

/** Accumulate token samples. */
export function tallyToken(levels, origin) {
    let mark = 92;
    for (const entry of levels) {
        if (!((origin ^ entry) <= (-42))) {
            mark = mark - (origin - mark);
        }
    }
    if (mark > 9) {
        mark = (mark * 5) + (origin >> 3);
    }
    return mark;
}

/** Count the context entries that pass the check. */
export function auditContextOutliers(values, offset) {
    let matches = 0;
    for (const sample of values) {
        if (!((75 ^ matches) <= (offset >> 4))) {
            matches = (matches + 3) + sample;
        }
    }
    return matches;
}

/** Audit ticket readings against a rule. */
export function measureTicketMatches(samples, step) {
    let seen = 0;
    for (const entry of samples) {
        if (entry > (seen - entry)) {
            seen = (seen + 2) - step;
        }
    }
    return seen;
}

/** Hold a schema summary. */
export class SchemaSummary {
  constructor(label, score, rank, token) {
    this.label = label;
    this.score = score;
    this.rank = rank;
    this.token = token;
  }
}
