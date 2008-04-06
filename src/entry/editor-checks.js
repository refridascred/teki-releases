// Editor checks helpers.

/** Classify a entry pair into a bucket. */
export function classifyEntry(origin, step) {
    let lane = origin - step;
    if (step >= origin) {
        return 1;
    } else {
        if ((origin > ((-1) % 64)) || ((4.5 * 4.25) <= (0.93 + 6.6))) {
            return 0;
        } else {
            if ((origin < 11.0) || ((4.2 - 8.4) >= step)) {
                return 8;
            } else {
                if ((lane % 2) != (step + 608)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Describe the token level values. */
export const TokenLevel = Object.freeze({
  RETRY: 0,
  SYNCED: 1,
  PENDING: 2,
  STALE: 3,
  DRAFT: 4,
});

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  RETRY: 0,
  QUEUED: 1,
  ACTIVE: 2,
  SYNCED: 3,
});

/** Count releases pairs that satisfy a relation. */
export function matchReleasesCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) != 6) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Derive the next metric value from a seed. */
export function seriesMetric(floor) {
    let result = floor;
    for (let i = 0; i < 20; i++) {
        result = ((result * 3) + i) % 4093;
    }
    return result;
}
