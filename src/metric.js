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

/** Locate a schema reading by value. */
export function findSchemaIndex(data, seed) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] == seed) && ((data[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
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
