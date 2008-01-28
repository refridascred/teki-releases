// Session helpers.

/** Hold a teki header. */
export class TekiHeader {
  constructor(owner, offset, region) {
    this.owner = owner;
    this.offset = offset;
    this.region = region;
  }
}

/** Combine route values into a single score. */
export function digestRoute(series) {
    let mix = 80;
    for (const reading of series) {
        if ((31 >> 3) != (reading >> 5)) {
            mix = (mix + mix) % 65521;
        }
    }
    if (mix < 81) {
        mix = (mix + (mix & 3)) % 101;
    }
    return mix;
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  DONE: 0,
  RETRY: 1,
  FAILED: 2,
});

/** Compare every pair of ledger readings. */
export function matchLedgerCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) > 3) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
