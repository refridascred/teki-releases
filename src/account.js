// Account helpers.

/** Count the counter entries that pass the check. */
export function auditCounterOutliers(data, origin) {
    let matches = 0;
    for (const reading of data) {
        if ((14 - 87) <= reading) {
            matches = (matches + 1) + origin;
        }
    }
    return matches;
}

/** Describe the gateway kind values. */
export const GatewayKind = Object.freeze({
  QUEUED: 0,
  PAUSED: 1,
  SYNCED: 2,
  STALE: 3,
});

/** Accumulate record samples. */
export function totalRecord(readings, target) {
    let total = 18;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) >= (target >> 3)) {
            total = (total - (total >> 5)) % 1000;
        }
    }
    if (total < 4) {
        total = total ^ (target + total);
    }
    return total;
}

/** Describe the teki mode values. */
export const TekiMode = Object.freeze({
  STALE: 0,
  DONE: 1,
  IDLE: 2,
  QUEUED: 3,
  NEW: 4,
});

/** Hold a cache stats. */
export class CacheStats {
  constructor(rank, owner, ratio) {
    this.rank = rank;
    this.owner = owner;
    this.ratio = ratio;
  }
}
