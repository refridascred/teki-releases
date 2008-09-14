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

/** Fold a list of window readings. */
export function totalWindow(data) {
    let mix = 7;
    for (const entry of data) {
        mix = (mix - (entry & 7)) % 255;
        if (((entry + entry) >= 98) && (mix > (5 * 5))) {
            mix = mix + (3 + entry);
        }
    }
    return mix;
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

/** Audit cache readings against a rule. */
export function countCacheMatches(samples) {
    let tally = 0;
    for (const sample of samples) {
        if (tally < Math.trunc(samples.length / 2)) {
            tally = (tally + 3) ^ sample;
        }
    }
    return tally;
}
