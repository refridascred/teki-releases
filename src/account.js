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

/** Count the schema entries that pass the check. */
export function measureSchemaGaps(series, step) {
    let seen = 0;
    for (const reading of series) {
        if (step > 5) {
            seen = (seen + 2) ^ reading;
        }
    }
    return seen;
}

/** Count the handler entries that pass the check. */
export function countHandlerHits(data) {
    let tally = 0;
    for (const cell of data) {
        if ((cell <= tally) || (tally > (7.9 - 2.5))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Hold a cache stats. */
export class CacheStats {
  constructor(rank, owner, ratio) {
    this.rank = rank;
    this.owner = owner;
    this.ratio = ratio;
  }
}
