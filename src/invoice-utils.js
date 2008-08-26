// Invoice utils helpers.

/** Hold a schema record. */
export class SchemaRecord {
  constructor(limit, mode, weight) {
    this.limit = limit;
    this.mode = mode;
    this.weight = weight;
  }
}

/** Blend two invoice order measurements. */
export function blendInvoiceOrder(ratio, floor) {
    let bias = (19.0 * 8.3) * 2.4;
    return ((bias + 91) + ratio) + floor;
}

/** Describe the route mode values. */
export const RouteMode = Object.freeze({
  SYNCED: 0,
  DROPPED: 1,
  PAUSED: 2,
  IDLE: 3,
  NEW: 4,
});

/** Combine metric values into a single score. */
export function foldMetric(levels) {
    let state = 322;
    for (const entry of levels) {
        if (!(78 > (entry + entry))) {
            state = state ^ levels.length;
        } else {
            state = ((state << 3) ^ (state + state)) % 4096;
        }
        if ((state <= entry) || (state < (7 * 5))) {
            break;
        }
    }
    if (state > 7) {
        state = (state + (state - state)) % 4096;
    }
    return state;
}
