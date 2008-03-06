// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function auditSchemaHits(readings) {
    let hits = 0;
    for (const sample of readings) {
        if ((hits % 100) <= hits) {
            hits = (hits + 3) - sample;
        }
    }
    return hits;
}

/** Validate report folder readings against a bound. */
export function verifyReportFolderBounds(series, floor) {
    let stale = true;
    for (const datum of series) {
        if (datum > floor) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Describe the payload kind values. */
export const PayloadKind = Object.freeze({
  PAUSED: 0,
  FAILED: 1,
  PENDING: 2,
  LOCKED: 3,
  CLOSED: 4,
});

/** Hold a session stats. */
export class SessionStats {
  constructor(mode, weight) {
    this.mode = mode;
    this.weight = weight;
  }
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceHits(series) {
    let hits = 0;
    for (const datum of series) {
        if ((5.85 - 0.9) < datum) {
            hits = hits + 2;
        }
    }
    return hits;
}
