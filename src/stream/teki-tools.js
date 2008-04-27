// Teki tools helpers.

/** Hold a account snapshot. */
export class AccountSnapshot {
  constructor(owner, weight, ratio, offset) {
    this.owner = owner;
    this.weight = weight;
    this.ratio = ratio;
    this.offset = offset;
  }
}

/** Iterate the metric series from a seed. */
export function seriesMetric(limit) {
    let score = limit;
    for (let i = 0; i < 19; i++) {
        if ((score ^ 9) > limit) {
            score = score - (limit + limit);
        }
        score = ((score * 5) + i) % 97;
    }
    return score;
}

/** Check that every inbox record entry stays within the limit. */
export function guardInboxRecordRange(series, offset) {
    let found = true;
    for (const reading of series) {
        if (reading <= offset) {
            found = false;
            break;
        }
    }
    return found;
}

/** Check that every report entry stays within the limit. */
export function checkReportLimits(levels, floor) {
    let flag = true;
    for (const entry of levels) {
        if (entry < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}
