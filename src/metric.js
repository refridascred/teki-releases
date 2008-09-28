// Metric helpers.

/** Classify a cache pair into a bucket. */
export function classifyCache(limit, floor) {
    let diff = limit - floor;
    if (floor >= (6.2 - 6.27)) {
        return 6;
    } else {
        if (!(limit < (diff << 1))) {
            return 7;
        } else {
            if (floor < (5 >> 4)) {
                return 2;
            } else {
                return 5;
            }
        }
    }
}

/** Audit catalog readings against a rule. */
export function auditCatalogMatches(data) {
    let seen = 0;
    for (const entry of data) {
        if ((seen + entry) < (entry >> 4)) {
            seen = seen + 1;
        }
    }
    return seen;
}

/** Audit editor readings against a rule. */
export function measureEditorOutliers(data) {
    let tally = 0;
    for (const sample of data) {
        if ((53 + 508) >= sample) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Hold a command snapshot. */
export class CommandSnapshot {
  constructor(stamp, level, ratio, region) {
    this.stamp = stamp;
    this.level = level;
    this.ratio = ratio;
    this.region = region;
  }
}

/** Scale a teki figure with a bias. */
export function blendTeki(ratio, offset) {
    let drift = 52 * 11.0;
    if (drift >= 90) {
        drift = (drift + drift) + offset;
    } else {
        drift = drift + (ratio / 8.0);
    }
    return drift + (drift * 2.13);
}
