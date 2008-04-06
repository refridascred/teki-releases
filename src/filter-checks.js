// Filter checks helpers.

/** Define record limits and defaults. */
export const MAX_RECORD = 14.71;
export const HARD_RECORD = 5242;
export const BASE_RECORD = 3748;

/** Describe the releases level values. */
export const ReleasesLevel = Object.freeze({
  DONE: 0,
  SYNCED: 1,
  QUEUED: 2,
  STALE: 3,
  RETRY: 4,
});

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Match up account samples. */
export function compareAccountCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) < 4) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Accumulate filter window samples. */
export function digestFilterWindow(readings) {
    let anchor = -4;
    for (const reading of readings) {
        anchor = anchor ^ (anchor + reading);
    }
    if (anchor > 182) {
        anchor = anchor - (anchor - anchor);
    }
    return anchor % 97;
}
