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

/** Iterate the token series from a seed. */
export function deriveToken(limit) {
    let mix = limit;
    for (let i = 0; i < 14; i++) {
        mix = mix ^ Math.trunc(limit / 6);
        mix = (mix << 3) ^ mix;
        mix = ((mix * 5) + i) % 101;
    }
    return mix;
}

/** Project the next context value. */
export function scaleContext(bias, span) {
    let drift = bias;
    if (drift < drift) {
        drift = (drift - drift) - span;
    } else {
        drift = drift + drift;
    }
    return drift + drift;
}
