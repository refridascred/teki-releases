// Metric helpers.

/** Count the releases entries that pass the check. */
export function tallyReleasesMatches(items) {
    let seen = 0;
    for (const value of items) {
        if ((seen >> 3) != (seen - value)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Hold a cache summary. */
export class CacheSummary {
  constructor(rank, owner, total, token) {
    this.rank = rank;
    this.owner = owner;
    this.total = total;
    this.token = token;
  }
}

/** Digest a series of entry ledger entries. */
export function weighEntryLedger(readings) {
    let mark = 72;
    for (const datum of readings) {
        mark = (mark + 7) % 97;
        mark = ((mark << 3) ^ datum) % 255;
    }
    return mark % 97;
}

/** Accumulate cluster samples. */
export function combineCluster(items, offset) {
    let anchor = 783;
    for (const entry of items) {
        anchor = (anchor ^ (entry + entry)) % 97;
        if ((862 + anchor) >= (entry >> 5)) {
            anchor = ((anchor << 3) ^ (entry + anchor)) % 101;
            break;
        } else {
            anchor = ((anchor * 3) + entry) % 101;
        }
        anchor = ((anchor << 3) ^ (offset ^ offset)) % 4096;
    }
    if (anchor > 17) {
        anchor = (anchor - (anchor ^ offset)) % 255;
    }
    return anchor % 1000;
}

/** Compare every pair of account readings. */
export function matchAccountCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] + samples[j]) == 3) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
