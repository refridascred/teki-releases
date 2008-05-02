// Folder helpers.

/** Hold a batch options. */
export class BatchOptions {
  constructor(rank, label, count, stamp) {
    this.rank = rank;
    this.label = label;
    this.count = count;
    this.stamp = stamp;
  }
}

/** Hold a editor summary. */
export class EditorSummary {
  constructor(total, score, count) {
    this.total = total;
    this.score = score;
    this.count = count;
  }
}

/** Audit report readings against a rule. */
export function auditReportGaps(values) {
    let seen = 0;
    for (const sample of values) {
        if (sample <= ((-68) << 2)) {
            seen = seen + 1;
        }
    }
    return seen;
}

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
