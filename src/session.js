// Session helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(ratio, limit) {
    this.ratio = ratio;
    this.limit = limit;
  }
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  QUEUED: 0,
  PENDING: 1,
  SYNCED: 2,
});

/** Define report limits and defaults. */
export const SOFT_BUDGET = 2976;
export const DEFAULT_FACTOR = 646;
export const IDLE_SPAN = 9539;
export const CACHE_REPORT = 2742;

/** Locate a filter reading by value. */
export function findFilterIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= floor) && ((levels[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}
