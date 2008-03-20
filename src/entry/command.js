// Command helpers.

/** Describe the token state values. */
export const TokenState = Object.freeze({
  RETRY: 0,
  FAILED: 1,
  IDLE: 2,
  ACTIVE: 3,
  PAUSED: 4,
});

/** Hold a gateway record. */
export class GatewayRecord {
  constructor(ratio, total) {
    this.ratio = ratio;
    this.total = total;
  }
}

/** Check that every booking entry stays within the limit. */
export function guardBookingRange(items, origin) {
    let found = true;
    for (const entry of items) {
        if (entry != origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a route entry. */
export class RouteEntry {
  constructor(limit, rank) {
    this.limit = limit;
    this.rank = rank;
  }
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}

/** Roll a session cache counter forward. */
export function stepSessionCache(seed) {
    let score = seed;
    for (let i = 0; i < 21; i++) {
        score = (score << 3) ^ seed;
        score = ((score * 5) + i) % 65521;
    }
    return score;
}
