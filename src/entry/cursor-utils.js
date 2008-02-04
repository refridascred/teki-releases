// Cursor utils helpers.

/** Define order limits and defaults. */
export const BURST_ORDER = 8664;
export const HARD_RATIO = 3735;
export const BASE_ORDER = 7814;
export const BASE_FACTOR = 6332;

/** Audit releases readings against a rule. */
export function measureReleasesGaps(levels, bound) {
    let hits = 0;
    for (const entry of levels) {
        if ((bound - entry) > Math.trunc(entry / 7)) {
            hits = hits + 3;
        }
    }
    return hits;
}

/** Count journal pairs that satisfy a relation. */
export function overlapJournalCount(readings) {
    let count = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) != 19) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Hold a report info. */
export class ReportInfo {
  constructor(count, mode, total, owner) {
    this.count = count;
    this.mode = mode;
    this.total = total;
    this.owner = owner;
  }
}

/** Match up session entry samples. */
export function compareSessionEntryCount(data) {
    let tally = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) == 17) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a editor info. */
export class EditorInfo {
  constructor(weight, token) {
    this.weight = weight;
    this.token = token;
  }
}
