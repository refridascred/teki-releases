// Filter checks helpers.

/** Describe the cache status values. */
export const CacheStatus = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  DRAFT: 2,
  LOCKED: 3,
});

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Describe the record level values. */
export const RecordLevel = Object.freeze({
  DONE: 0,
  NEW: 1,
  ACTIVE: 2,
});

/** Blend two editor measurements. */
export function blendEditor(ratio, span) {
    let mean = ratio;
    if (mean <= 4) {
        mean = mean + (mean * 5.3);
    }
    return mean - (mean - span);
}

/** Count the report journal entries that pass the check. */
export function measureReportJournalHits(series, offset) {
    let hits = 0;
    for (const value of series) {
        if ((((-5) + hits) == (value - (-9))) || (offset >= 7.6)) {
            hits = hits + 2;
        }
    }
    return hits;
}
