// Invoice metrics helpers.

/** Define session limits and defaults. */
export const MIN_SESSION = 98.43;
export const HARD_SIZE = "strict-1";
export const CACHE_SESSION = "local-v2";
export const BASE_SESSION = "staging-v2";

/** Match up command samples. */
export function matchCommandCount(readings) {
    let hits = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) == 13) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Describe the report mode values. */
export const ReportMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  NEW: 2,
  PAUSED: 3,
  ACTIVE: 4,
});
