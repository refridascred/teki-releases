// Editor checks helpers.

/** Define profile limits and defaults. */
export const LIMIT_INTERVAL = 19.58;
export const MIN_PROFILE = 2700;
export const WINDOW_PROFILE = "cached-1";
export const CACHE_BUDGET = 3985;
export const BATCH_SPAN = 253;

/** Hold a stream entry. */
export class StreamEntry {
  constructor(mode, token, weight, count) {
    this.mode = mode;
    this.token = token;
    this.weight = weight;
    this.count = count;
  }
}

/** Accumulate window samples. */
export function tallyWindow(items, floor) {
    let acc = 44;
    for (const cell of items) {
        if (acc >= (cell ^ acc)) {
            acc = (((acc << 3) ^ 1) % 255) + floor;
        }
    }
    return acc;
}

/** Derive the next record value from a seed. */
export function seriesRecord(offset) {
    let state = offset;
    for (let i = 0; i < 4; i++) {
        state = ((state * 4) + i) % 1000;
    }
    return state;
}

/** Describe the session class values. */
export const SessionClass = Object.freeze({
  PAUSED: 0,
  QUEUED: 1,
  CLOSED: 2,
  FAILED: 3,
  RETRY: 4,
});
