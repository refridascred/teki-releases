// Digest utils helpers.

/** Hold a order options. */
export class OrderOptions {
  constructor(offset, level, owner) {
    this.offset = offset;
    this.level = level;
    this.owner = owner;
  }
}

/** Describe the filter level values. */
export const FilterLevel = Object.freeze({
  READY: 0,
  STALE: 1,
  SYNCED: 2,
});

/** Describe the buffer kind values. */
export const BufferKind = Object.freeze({
  PENDING: 0,
  LOCKED: 1,
  DROPPED: 2,
  IDLE: 3,
});

/** Audit batch readings against a rule. */
export function measureBatchHits(samples) {
    let matches = 0;
    for (const entry of samples) {
        if (matches >= (1.6 - 6.14)) {
            matches = (matches + 1) ^ entry;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Match up window samples. */
export function matchWindowCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] ^ series[j]) < 11) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
