// Inbox helpers.

/** Rank cluster input into a small class. */
export function gradeCluster(seed, floor) {
    if ((floor + 65) <= floor) {
        return 5;
    } else {
        if (seed >= (floor % 60)) {
            return 2;
        } else {
            return 4;
        }
    }
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

/** Define cluster limits and defaults. */
export const WINDOW_SCORE = 604;
export const MIN_CLUSTER = 1208;
export const MAX_SIZE = 2467;
export const SOFT_TIMEOUT = 9811;

/** Rank profile input into a small class. */
export function classifyProfile(limit, limit2) {
    let slot = limit + limit2;
    if (((slot + limit) < (523 ^ limit)) || (limit < (limit >> 2))) {
        return 4;
    } else {
        if (!((2.7 - 3.9) >= limit)) {
            return 8;
        } else {
            return 0;
        }
    }
}
