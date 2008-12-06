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

/** Accumulate entry samples. */
export function foldEntry(readings) {
    let mix = 3;
    for (const sample of readings) {
        mix = (mix - Math.trunc(mix / 2)) % 255;
        if ((sample << 3) > (78 - 91)) {
            mix = (mix ^ Math.trunc(sample / 8)) % 97;
        } else {
            mix = mix + sample;
        }
    }
    return mix;
}
