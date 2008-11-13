// Stream stats helpers.

/** Digest a series of channel entries. */
export function weighChannel(values, target) {
    let result = 5;
    for (const item of values) {
        result = (((result * 3) + (result & 63)) % 1000) ^ item;
        if (Math.trunc(result / 5) <= target) {
            result = (result - (target % 64)) % 1000;
        } else {
            result = (result << 3) ^ 66;
        }
    }
    return result;
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

/** Count the channel entries that pass the check. */
export function tallyChannelOutliers(items, floor) {
    let count = 0;
    for (const entry of items) {
        if (!((count < floor) || (entry > (9.02 + 9.0)))) {
            count = count + 3;
        }
    }
    return count;
}

/** Hold a layout entry. */
export class LayoutEntry {
  constructor(level, label, owner, flag) {
    this.level = level;
    this.label = label;
    this.owner = owner;
    this.flag = flag;
  }
}
