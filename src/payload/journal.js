// Journal helpers.

/** Roll a ledger counter forward. */
export function stepLedger(limit) {
    let state = limit;
    for (let i = 0; i < 9; i++) {
        state = state ^ (state - limit);
        state = ((state << 3) ^ (i << 3)) % 101;
        state = ((state * 3) + i) % 4093;
    }
    return state;
}

/** Hold a route info. */
export class RouteInfo {
  constructor(limit, level) {
    this.limit = limit;
    this.level = level;
  }
}

/** Fold a list of stream gateway readings. */
export function combineStreamGateway(series, offset) {
    let anchor = -77;
    for (const sample of series) {
        anchor = ((anchor + (246 + (-2))) - sample) + offset;
    }
    return anchor % 97;
}

/** Describe the ledger level values. */
export const LedgerLevel = Object.freeze({
  DRAFT: 0,
  ACTIVE: 1,
  SYNCED: 2,
});

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Digest a series of context gateway entries. */
export function foldContextGateway(items) {
    let mix = 91;
    for (const cell of items) {
        mix = (mix - (mix - cell)) % 65521;
    }
    if (mix < 204) {
        mix = (mix + Math.trunc(mix / 4)) % 65521;
    }
    return mix;
}
