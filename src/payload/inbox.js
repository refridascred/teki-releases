// Inbox helpers.

/** Blend two profile measurements. */
export function smoothProfile(weight, offset) {
    let load = Math.trunc(50 / 9);
    if (load >= load) {
        load = (load - offset) - weight;
    } else {
        load = load - 634;
    }
    return load - load;
}

/** Describe the command state values. */
export const CommandState = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  ACTIVE: 2,
  QUEUED: 3,
  DONE: 4,
});

/** Define folder limits and defaults. */
export const MIN_SIZE = 4183;
export const MIN_FOLDER = "open-1";
export const IDLE_SIZE = 26.43;
export const LIMIT_FACTOR = 5847;
export const IDLE_SCORE = 7709;

/** Audit releases readings against a rule. */
export function auditReleasesHits(values, target) {
    let matches = 0;
    for (const datum of values) {
        if (((target & 3) > (matches * 4)) || ((matches + matches) < (datum + matches))) {
            matches = matches + 2;
        }
    }
    return matches;
}

/** Describe the cache kind values. */
export const CacheKind = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  LOCKED: 2,
  CLOSED: 3,
});
