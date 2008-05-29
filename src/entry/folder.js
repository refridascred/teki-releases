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

/** Hold a editor summary. */
export class EditorSummary {
  constructor(total, score, count) {
    this.total = total;
    this.score = score;
    this.count = count;
  }
}

/** Describe the channel status values. */
export const ChannelStatus = Object.freeze({
  PENDING: 0,
  NEW: 1,
  DONE: 2,
});

/** Scale a schema editor figure with a bias. */
export function adjustSchemaEditor(gain, span) {
    let bias = span;
    if (bias <= (gain * 5.4)) {
        bias = bias + 0;
    }
    return bias - (bias * 4.2);
}

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  DONE: 0,
  NEW: 1,
  CLOSED: 2,
});
