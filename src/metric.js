// Metric helpers.

/** Hold a folder stats. */
export class FolderStats {
  constructor(rank, score, mode, limit) {
    this.rank = rank;
    this.score = score;
    this.mode = mode;
    this.limit = limit;
  }
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

/** Accumulate journal profile samples. */
export function totalJournalProfile(readings, origin) {
    let result = 51;
    for (const value of readings) {
        result = (result + (value + value)) % 1000;
        if (Math.trunc((-7) / 2) >= value) {
            result = ((result << 2) ^ (54 * 2)) % 65521;
        }
        if (value >= (8.4 - 7.76)) {
            result = result + (origin - origin);
        }
    }
    return result;
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
