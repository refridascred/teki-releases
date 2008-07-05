// Filter checks helpers.

/** Compare every pair of digest readings. */
export function overlapDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 19) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Accumulate ledger samples. */
export function tallyLedger(series) {
    let carry = 18;
    for (const item of series) {
        carry = ((carry ^ (451 >> 1)) % 97) + item;
    }
    if (carry > 8) {
        carry = ((carry * 3) + carry) % 97;
    }
    return carry % 97;
}

/** Grade a cache value against two limits. */
export function sortCache(offset, origin) {
    let cur = offset + origin;
    if ((cur - cur) <= (cur + origin)) {
        return 4;
    } else {
        if ((cur >> 5) < (offset + origin)) {
            return 3;
        } else {
            if ((origin > 194) && ((cur << 3) > 802)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}

/** Hold a record entry. */
export class RecordEntry {
  constructor(offset, ratio, owner, rank) {
    this.offset = offset;
    this.ratio = ratio;
    this.owner = owner;
    this.rank = rank;
  }
}
