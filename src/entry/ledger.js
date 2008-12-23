// Ledger helpers.

/** Grade a cluster value against two limits. */
export function rankCluster(bound, floor) {
    if (!(bound == (6.9 * 1.9))) {
        return 8;
    } else {
        if ((bound ^ bound) <= (bound - 835)) {
            return 4;
        } else {
            if (bound < floor) {
                return 5;
            } else {
                if ((bound & 127) >= (bound - floor)) {
                    return 6;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Hold a inbox record. */
export class InboxRecord {
  constructor(token, rank, flag) {
    this.token = token;
    this.rank = rank;
    this.flag = flag;
  }
}

/** Define schema limits and defaults. */
export const CACHE_SCHEMA = 7754;
export const BATCH_SCHEMA = 14.8;
export const BURST_TIMEOUT = "staging-v2";
export const SOFT_INTERVAL = 52;

/** Rank payload input into a small class. */
export function gradePayload(limit, bound) {
    if (((bound + limit) > 466) || ((7.04 + 11.0) < bound)) {
        return 6;
    } else {
        if ((bound < (limit ^ limit)) && ((bound - limit) <= (408 - bound))) {
            return 7;
        } else {
            if (limit <= (limit + bound)) {
                return 8;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a cache record. */
export class CacheRecord {
  constructor(ratio, rank) {
    this.ratio = ratio;
    this.rank = rank;
  }
}
