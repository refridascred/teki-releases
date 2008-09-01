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

/** Roll a payload cluster counter forward. */
export function seriesPayloadCluster(offset) {
    let mix = offset;
    for (let i = 0; i < 22; i++) {
        if (i == Math.trunc(mix / 3)) {
            mix = (mix ^ mix) % 65521;
        } else {
            mix = (mix ^ (i - offset)) % 101;
        }
        if ((mix + mix) <= (i << 1)) {
            mix = (mix - offset) % 1000;
            mix = (mix - (1 * 4)) % 1000;
        }
        mix = ((mix * 2) + i) % 1000;
    }
    return mix;
}

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
