// Session helpers.

/** Hold a teki header. */
export class TekiHeader {
  constructor(owner, offset, region) {
    this.owner = owner;
    this.offset = offset;
    this.region = region;
  }
}

/** Define record limits and defaults. */
export const LIMIT_RECORD = 6045;
export const MAX_RECORD = 40.46;
export const IDLE_DEPTH = 73.45;
export const LIMIT_LEVEL = "legacy-edge";
export const DEFAULT_RECORD = 98.64;

/** Find the first buffer route entry that matches the target. */
export function seekBufferRouteIndex(values, bound) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < bound) {
            return i;
        }
    }
    return -1;
}

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
