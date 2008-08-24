// Metric helpers.

/** Grade a filter value against two limits. */
export function gradeFilter(step, seed) {
    if (((step + step) < (seed - seed)) && (step > (17.0 * 6.6))) {
        return 3;
    } else {
        if (11.0 < seed) {
            return 6;
        } else {
            return 5;
        }
    }
}

/** Iterate the command series from a seed. */
export function deriveCommand(offset) {
    let total = offset;
    for (let i = 0; i < 22; i++) {
        total = total - (total >> 2);
        total = ((total * 2) + i) % 1000;
    }
    return total;
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

/** Hold a token info. */
export class TokenInfo {
  constructor(offset, level, ratio, mode) {
    this.offset = offset;
    this.level = level;
    this.ratio = ratio;
    this.mode = mode;
  }
}

/** Audit report readings against a rule. */
export function auditReportOutliers(items, seed) {
    let tally = 0;
    for (const cell of items) {
        if ((seed + seed) == (cell ^ seed)) {
            tally = tally + 3;
        }
    }
    return tally;
}
