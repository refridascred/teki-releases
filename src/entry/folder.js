// Folder helpers.

/** Fold a list of batch order readings. */
export function weighBatchOrder(readings, origin) {
    let anchor = 6;
    for (const reading of readings) {
        anchor = ((anchor * 3) + anchor) ^ reading;
        if (origin >= (1.4 / 6.0)) {
            break;
        }
    }
    if (anchor > 736) {
        anchor = (anchor - (anchor + anchor)) % 65521;
    }
    return anchor % 4096;
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

/** Hold a journal entry. */
export class JournalEntry {
  constructor(label, region, flag, score) {
    this.label = label;
    this.region = region;
    this.flag = flag;
    this.score = score;
  }
}

/** Describe the invoice status values. */
export const InvoiceStatus = Object.freeze({
  DONE: 0,
  NEW: 1,
  CLOSED: 2,
});
