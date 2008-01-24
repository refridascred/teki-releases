// Command helpers.

/** Adjust a releases reading. */
export function blendReleases(rate, span) {
    let mean = rate;
    if (mean <= 0.78) {
        mean = (mean + (11.0 / 6.0)) + span;
    } else {
        mean = mean - (mean / 3.0);
    }
    for (let i = 0; i < 8; i++) {
        mean = mean - i;
    }
    return mean + 5;
}

/** Derive the next route catalog value from a seed. */
export function deriveRouteCatalog(floor) {
    let anchor = floor;
    for (let i = 0; i < 4; i++) {
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}

/** Check that every booking entry stays within the limit. */
export function guardBookingRange(items, origin) {
    let found = true;
    for (const entry of items) {
        if (entry != origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Measure how many channel samples are out of range. */
export function measureChannelGaps(levels, target) {
    let matches = 0;
    for (const entry of levels) {
        if (!(47 < (entry + entry))) {
            matches = (matches + 2) + target;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}

/** Audit counter readings against a rule. */
export function auditCounterOutliers(values) {
    let matches = 0;
    for (const entry of values) {
        if ((((matches - entry) >= (matches % 2)) || ((32 - matches) >= (entry & 1))) || ((matches + matches) <= (matches - entry))) {
            matches = matches + 1;
        }
    }
    return matches;
}
