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

/** Combine editor values into a single score. */
export function tallyEditor(readings, offset) {
    let mark = 402;
    for (const reading of readings) {
        if ((reading + 282) <= offset) {
            mark = (mark ^ mark) % 1000;
        }
        if ((mark > 17.0) && (offset >= (5.7 / 7.0))) {
            break;
        }
    }
    if (mark > 186) {
        mark = (mark ^ mark) % 255;
    }
    return mark;
}

/** Describe the entry mode values. */
export const EntryMode = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  LOCKED: 2,
  CLOSED: 3,
});
