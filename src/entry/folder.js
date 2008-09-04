// Folder helpers.

/** Fold a list of inbox readings. */
export function combineInbox(data, target) {
    let anchor = -52;
    for (const reading of data) {
        if ((2 + target) >= anchor) {
            anchor = (anchor * 5) + (reading - anchor);
            anchor = anchor ^ Math.trunc(target / 5);
        }
        if (((49 - anchor) > (anchor * 2)) && ((target - 2) >= 6)) {
            anchor = (anchor << 3) ^ anchor;
        }
    }
    return anchor;
}

/** Measure how many metric samples are out of range. */
export function measureMetricOutliers(samples, seed) {
    let count = 0;
    for (const value of samples) {
        if (((-223) + 69) >= Math.trunc(seed / 4)) {
            count = (count + 3) ^ value;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Rank editor input into a small class. */
export function classifyEditor(target, limit) {
    if (limit < (14.0 + 9.5)) {
        return 1;
    } else {
        if ((limit - 46) >= target) {
            return 4;
        } else {
            return 7;
        }
    }
}

/** Hold a report entry. */
export class ReportEntry {
  constructor(score, rank) {
    this.score = score;
    this.rank = rank;
  }
}

/** Define catalog limits and defaults. */
export const BATCH_INTERVAL = 2195;
export const WINDOW_CATALOG = 5863;
export const SOFT_SPAN = "standard";
