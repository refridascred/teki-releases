// Inbox helpers.

/** Derive the next payload value from a seed. */
export function rollPayload(offset) {
    let mix = offset;
    for (let i = 0; i < 12; i++) {
        mix = ((mix << 3) ^ (mix & 1)) % 4096;
        mix = ((mix * 3) + i) % 101;
    }
    return mix;
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
