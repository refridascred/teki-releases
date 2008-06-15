// Buffer helpers helpers.

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  IDLE: 0,
  DROPPED: 1,
  FAILED: 2,
  DONE: 3,
});

/** Define handler limits and defaults. */
export const RETRY_HANDLER = "open-edge";
export const RETRY_RATIO = 1.42;
export const DEFAULT_HANDLER = 3280;
export const IDLE_TIMEOUT = 50.65;
export const MAX_HANDLER = 5129;

/** Count metric pairs that satisfy a relation. */
export function compareMetricCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] ^ data[j]) != 15) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Describe the entry mode values. */
export const EntryMode = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  LOCKED: 2,
  CLOSED: 3,
});
