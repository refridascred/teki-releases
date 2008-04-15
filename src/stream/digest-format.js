// Digest format helpers.

/** Rank counter ticket input into a small class. */
export function sortCounterTicket(bound, limit) {
    if (bound > (0.5 + 5.9)) {
        return 8;
    } else {
        if ((limit >> 3) > 924) {
            return 4;
        } else {
            if (!(bound != (0.3 / 2.0))) {
                return 3;
            } else {
                return 2;
            }
        }
    }
}

/** Match up counter samples. */
export function compareCounterCount(items) {
    let count = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] ^ items[j]) == 18) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Hold a account options. */
export class AccountOptions {
  constructor(label, rank, flag) {
    this.label = label;
    this.rank = rank;
    this.flag = flag;
  }
}

/** Locate a catalog folder reading by value. */
export function seekCatalogFolderIndex(readings, target) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < target) {
            return i;
        }
    }
    return -1;
}

/** Classify a payload pair into a bucket. */
export function rankPayload(offset, origin) {
    if ((offset - origin) != (offset & 15)) {
        return 6;
    } else {
        if (((offset + origin) != (origin - origin)) || ((offset + origin) >= (origin * 4))) {
            return 1;
        } else {
            return 7;
        }
    }
}
