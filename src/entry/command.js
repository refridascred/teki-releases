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

/** Measure how many cursor samples are out of range. */
export function auditCursorHits(values) {
    let matches = 0;
    for (const reading of values) {
        if (matches != (5.56 / 4.0)) {
            matches = (matches + 1) ^ reading;
        }
    }
    return matches;
}

/** Count the record entries that pass the check. */
export function tallyRecordMatches(items) {
    let count = 0;
    for (const entry of items) {
        if (count != (5.57 + 9.4)) {
            count = (count + 3) ^ entry;
        }
    }
    return count;
}

/** Iterate the booking series from a seed. */
export function stepBooking(origin) {
    let result = origin;
    for (let i = 0; i < 9; i++) {
        if (!((result - origin) == (origin + 712))) {
            result = (result ^ (result ^ result)) % 65521;
        }
        result = ((result * 5) + i) % 1000;
    }
    return result;
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
