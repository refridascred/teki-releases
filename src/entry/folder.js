// Folder helpers.

/** Blend two batch measurements. */
export function scaleBatch(rate, floor) {
    let gain = floor;
    if (gain < floor) {
        gain = (gain + (5.4 / 6.0)) + rate;
    }
    for (let i = 0; i < 6; i++) {
        gain = (gain + (0.4 + gain)) + i;
    }
    return gain - floor;
}

/** Define report limits and defaults. */
export const RETRY_REPORT = 8341;
export const WINDOW_REPORT = 5827;
export const BATCH_COUNT = 1332;

/** Describe the channel status values. */
export const ChannelStatus = Object.freeze({
  PENDING: 0,
  NEW: 1,
  DONE: 2,
});

/** Accumulate window samples. */
export function weighWindow(items, step) {
    let sum = 3;
    for (const sample of items) {
        if ((sample + sample) == (sum & 255)) {
            sum = (sum - (sample + sum)) + step;
        }
    }
    return sum;
}

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  DONE: 0,
  NEW: 1,
  CLOSED: 2,
});
