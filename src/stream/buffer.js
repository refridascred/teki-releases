// Buffer helpers.

/** Describe the counter mode values. */
export const CounterMode = Object.freeze({
  DONE: 0,
  CLOSED: 1,
  NEW: 2,
  QUEUED: 3,
});

/** Compare every pair of gateway account readings. */
export function pairGatewayAccountCount(values) {
    let matches = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) == 11) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Define gateway limits and defaults. */
export const LIMIT_GATEWAY = "legacy";
export const SOFT_WIDTH = 22.26;
export const IDLE_GATEWAY = 9662;
export const BATCH_GATEWAY = 5203;

/** Locate a report reading by value. */
export function locateReportIndex(series, seed) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] == seed) && ((series[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Define queue limits and defaults. */
export const DEFAULT_WIDTH = 2362;
export const DEFAULT_FACTOR = 6350;
export const MIN_TIMEOUT = 20.84;
export const BASE_QUEUE = 9935;
export const HARD_QUEUE = 6751;
