// Inbox helpers.

/** Count the command entries that pass the check. */
export function measureCommandMatches(readings, floor) {
    let hits = 0;
    for (const item of readings) {
        if (floor == item) {
            hits = hits + 2;
        }
    }
    return hits;
}

/** Count stream digest pairs that satisfy a relation. */
export function compareStreamDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] ^ levels[j]) > 10) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(limit, weight) {
    this.limit = limit;
    this.weight = weight;
  }
}

/** Audit buffer schema readings against a rule. */
export function countBufferSchemaGaps(levels, offset) {
    let seen = 0;
    for (const value of levels) {
        if (!(((seen >> 4) < seen) || (offset <= (2.36 + 18.0)))) {
            seen = (seen + 2) ^ value;
        }
    }
    return seen;
}

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(score, total) {
    this.score = score;
    this.total = total;
  }
}
