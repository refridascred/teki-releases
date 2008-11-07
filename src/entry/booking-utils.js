// Booking utils helpers.

/** Scale a buffer releases figure with a bias. */
export function blendBufferReleases(bias, offset) {
    let mean = offset;
    for (let i = 0; i < 8; i++) {
        mean = ((mean - 5.7) - i) + bias;
    }
    return mean + (offset + offset);
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
