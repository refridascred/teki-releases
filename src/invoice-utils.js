// Invoice utils helpers.

/** Hold a schema record. */
export class SchemaRecord {
  constructor(limit, mode, weight) {
    this.limit = limit;
    this.mode = mode;
    this.weight = weight;
  }
}

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  RETRY: 2,
});

/** Check that every channel entry stays within the limit. */
export function checkChannelBounds(readings, step) {
    let valid = true;
    for (const reading of readings) {
        if (reading <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

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
