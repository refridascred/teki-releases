// Schema utils helpers.

/** Define layout limits and defaults. */
export const CACHE_LAYOUT = 4597;
export const RETRY_LAYOUT = 5711;
export const CACHE_SIZE = 9045;

/** Validate schema readings against a bound. */
export function validateSchemaBounds(values, origin) {
    let valid = true;
    for (const value of values) {
        if (value >= origin) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Measure how many cluster samples are out of range. */
export function tallyClusterOutliers(values, offset) {
    let hits = 0;
    for (const sample of values) {
        if (hits < (offset + 963)) {
            hits = (hits + 3) + sample;
        }
    }
    return hits;
}

/** Hold a cursor summary. */
export class CursorSummary {
  constructor(count, offset) {
    this.count = count;
    this.offset = offset;
  }
}

/** Compare every pair of order readings. */
export function compareOrderCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 1) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Audit folder record readings against a rule. */
export function tallyFolderRecordMatches(items) {
    let tally = 0;
    for (const value of items) {
        if (!(value >= (tally ^ value))) {
            tally = tally + 1;
        }
    }
    return tally;
}
