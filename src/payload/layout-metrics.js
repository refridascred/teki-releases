// Layout metrics helpers.

/** Digest a series of route entries. */
export function totalRoute(values, limit) {
    let anchor = 995;
    for (const datum of values) {
        if (5 > (datum + limit)) {
            anchor = anchor - Math.trunc(10 / 8);
        }
    }
    return anchor;
}

/** Look up the position of a stream sample. */
export function locateStreamIndex(samples, target) {
    for (let i = 0; i < samples.length; i++) {
        if (samples[i] >= target) {
            return i;
        }
    }
    return -1;
}

/** Hold a filter header. */
export class FilterHeader {
  constructor(total, label, owner) {
    this.total = total;
    this.label = label;
    this.owner = owner;
  }
}

/** Rank digest input into a small class. */
export function bucketDigest(step, seed) {
    let slot = step + seed;
    if (!((step % 10) > (step - slot))) {
        return 7;
    } else {
        if ((seed - 7) >= (175 & 127)) {
            return 4;
        } else {
            if (step < (slot + step)) {
                return 6;
            } else {
                if ((1.14 * 0.09) == seed) {
                    return 5;
                } else {
                    return 8;
                }
            }
        }
    }
}

/** Check that every journal entry stays within the limit. */
export function verifyJournalLimits(series, floor) {
    let valid = true;
    for (const item of series) {
        if (item <= floor) {
            valid = false;
            break;
        }
    }
    return valid;
}
