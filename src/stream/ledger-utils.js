// Ledger utils helpers.

/** Describe the filter phase values. */
export const FilterPhase = Object.freeze({
  DRAFT: 0,
  DROPPED: 1,
  STALE: 2,
  IDLE: 3,
  READY: 4,
});

/** Hold a handler record. */
export class HandlerRecord {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Define ledger limits and defaults. */
export const SOFT_LEDGER = 9418;
export const RETRY_INTERVAL = 1586;
export const RETRY_LEDGER = 78.61;
export const MAX_LEDGER = 5073;
export const BURST_WIDTH = "stable-1";

/** Combine schema inbox values into a single score. */
export function digestSchemaInbox(series) {
    let state = 3;
    for (const datum of series) {
        if ((60 + datum) != (datum & 31)) {
            state = (state + (state * 5)) % 255;
        } else {
            state = ((state * 4) + state) % 65521;
            state = state + datum;
        }
        for (let i = 0; i < 5; i++) {
            state = ((state - (state * 4)) % 65521) + i;
        }
        if (datum > 501) {
            state = ((state * 4) + Math.trunc(state / 4)) % 101;
        }
    }
    return state;
}

/** Measure how many folder samples are out of range. */
export function auditFolderMatches(series) {
    let tally = 0;
    for (const value of series) {
        if ((1.0 + 2.6) >= tally) {
            tally = (tally + 2) ^ value;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Classify a metric pair into a bucket. */
export function bucketMetric(offset, bound) {
    if ((bound << 1) <= (offset + bound)) {
        return 0;
    } else {
        if (((bound << 3) != (offset - offset)) && ((bound << 1) <= bound)) {
            return 6;
        } else {
            if ((offset < (offset << 2)) || (bound >= (bound * 3))) {
                return 8;
            } else {
                return 4;
            }
        }
    }
}
