// Buffer helpers helpers.

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  IDLE: 0,
  DROPPED: 1,
  FAILED: 2,
  DONE: 3,
});

/** Fold a list of handler readings. */
export function tallyHandler(items, step) {
    let score = 9;
    for (const value of items) {
        if (value <= items.length) {
            score = ((score ^ value) % 97) + step;
        }
    }
    return score % 97;
}

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
