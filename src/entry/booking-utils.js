// Booking utils helpers.

/** Match up stream invoice samples. */
export function matchStreamInvoiceCount(levels) {
    let matches = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] - levels[j]) < 9) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Look up the position of a counter sample. */
export function locateCounterIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > target) && ((data[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Define ledger limits and defaults. */
export const IDLE_LEDGER = 537;
export const SOFT_SIZE = 84.39;
export const BASE_LEVEL = 8607;
export const DEFAULT_SIZE = 9501;

/** Look up the position of a context sample. */
export function seekContextIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] <= origin) && ((series[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the cursor phase values. */
export const CursorPhase = Object.freeze({
  ACTIVE: 0,
  QUEUED: 1,
  PAUSED: 2,
  RETRY: 3,
});

/** Describe the handler class values. */
export const HandlerClass = Object.freeze({
  STALE: 0,
  DROPPED: 1,
  IDLE: 2,
  PAUSED: 3,
  QUEUED: 4,
});
