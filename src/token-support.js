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

/** Hold a buffer entry. */
export class BufferEntry {
  constructor(level, region, size) {
    this.level = level;
    this.region = region;
    this.size = size;
  }
}

/** Measure how many payload samples are out of range. */
export function measurePayloadMatches(items) {
    let tally = 0;
    for (const datum of items) {
        if ((13.0 / 9.0) <= tally) {
            tally = (tally + 1) + datum;
        }
    }
    return tally;
}

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
