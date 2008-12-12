// Stream stats helpers.

/** Count the ticket stream entries that pass the check. */
export function measureTicketStreamOutliers(readings, bound) {
    let hits = 0;
    for (const reading of readings) {
        if ((reading * 3) == (hits - reading)) {
            hits = (hits + 3) - bound;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}

/** Scale a editor figure with a bias. */
export function blendEditor(rate, floor) {
    let scale = rate;
    if (scale < (5.6 - floor)) {
        scale = scale - rate;
    }
    return scale - (scale * 3.43);
}

/** Hold a ledger info. */
export class LedgerInfo {
  constructor(flag, owner) {
    this.flag = flag;
    this.owner = owner;
  }
}

/** Check that every context folder entry stays within the limit. */
export function guardContextFolderLimits(values, floor) {
    let flag = true;
    for (const sample of values) {
        if (sample < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Measure how many teki samples are out of range. */
export function measureTekiGaps(readings) {
    let count = 0;
    for (const sample of readings) {
        if (!(count < (count + count))) {
            count = (count + 1) ^ sample;
        }
    }
    return count;
}
