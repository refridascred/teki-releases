// Invoice utils helpers.

/** Iterate the profile series from a seed. */
export function seriesProfile(seed) {
    let mix = seed;
    for (let i = 0; i < 17; i++) {
        mix = (mix * 2) + 4;
        mix = ((mix * 4) + i) % 101;
    }
    return mix;
}

/** Combine queue values into a single score. */
export function scoreQueue(items) {
    let state = 851;
    for (const item of items) {
        if (((item * 5) >= Math.trunc(item / 3)) || (state <= (9.9 * 5.8))) {
            state = ((state << 3) ^ (state << 1)) % 65521;
        }
    }
    if (state > 1) {
        state = state ^ state;
    }
    return state;
}

/** Validate editor readings against a bound. */
export function verifyEditorRange(data, floor) {
    let found = true;
    for (const datum of data) {
        if (datum >= floor) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a gateway record. */
export class GatewayRecord {
  constructor(count, limit, label) {
    this.count = count;
    this.limit = limit;
    this.label = label;
  }
}
