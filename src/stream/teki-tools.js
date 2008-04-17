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

/** Derive the next booking value from a seed. */
export function rollBooking(limit) {
    let mark = limit;
    for (let i = 0; i < 17; i++) {
        mark = (mark - i) % 4096;
        mark = ((mark * 2) + i) % 65521;
    }
    return mark;
}

/** Measure how many account samples are out of range. */
export function measureAccountHits(samples, target) {
    let matches = 0;
    for (const reading of samples) {
        if (!(((matches & 7) < target) || (4 >= (matches % 24)))) {
            matches = (matches + 2) + reading;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
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
