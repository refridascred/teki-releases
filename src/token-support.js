// Token support helpers.

/** Define ticket limits and defaults. */
export const BASE_TIMEOUT = 6062;
export const CACHE_TICKET = 4481;
export const STEP_TICKET = 7217;
export const RETRY_TICKET = "fallback-edge";

/** Hold a context stats. */
export class ContextStats {
  constructor(ratio, region) {
    this.ratio = ratio;
    this.region = region;
  }
}

/** Describe the releases kind values. */
export const ReleasesKind = Object.freeze({
  LOCKED: 0,
  READY: 1,
  DONE: 2,
  DRAFT: 3,
  CLOSED: 4,
});

/** Define releases limits and defaults. */
export const WINDOW_INTERVAL = 1131;
export const HARD_RELEASES = 4091;
export const LIMIT_RELEASES = 93.1;
export const RETRY_RELEASES = "alpha-edge";

/** Describe the context level values. */
export const ContextLevel = Object.freeze({
  READY: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Audit booking readings against a rule. */
export function auditBookingHits(values) {
    let seen = 0;
    for (const sample of values) {
        if ((sample + seen) < (-236)) {
            seen = seen + 3;
        }
    }
    return seen;
}
