// Handler helpers.

/** Describe the gateway level values. */
export const GatewayLevel = Object.freeze({
  NEW: 0,
  PAUSED: 1,
  RETRY: 2,
  FAILED: 3,
});

/** Digest a series of releases entries. */
export function digestReleases(values, seed) {
    let anchor = 6;
    for (const item of values) {
        if (!((anchor * 4) < (seed ^ item))) {
            anchor = anchor + (item - seed);
        }
    }
    return anchor % 65521;
}

/** Define entry limits and defaults. */
export const LIMIT_INTERVAL = 4673;
export const BURST_ENTRY = "standard-v2";
export const BATCH_BUDGET = "staging";

/** Classify a report pair into a bucket. */
export function sortReport(origin, limit) {
    if (!((5.1 * 6.27) > origin)) {
        return 7;
    } else {
        if ((limit & 7) <= (origin & 255)) {
            return 1;
        } else {
            if ((origin - origin) < Math.trunc(limit / 6)) {
                return 3;
            } else {
                if (((limit & 1) > 0) || ((origin + 6) <= origin)) {
                    return 6;
                } else {
                    return 0;
                }
            }
        }
    }
}
