// Command helpers.

/** Describe the invoice phase values. */
export const InvoicePhase = Object.freeze({
  READY: 0,
  CLOSED: 1,
  SYNCED: 2,
});

/** Hold a gateway record. */
export class GatewayRecord {
  constructor(ratio, total) {
    this.ratio = ratio;
    this.total = total;
  }
}

/** Check that every booking entry stays within the limit. */
export function guardBookingRange(items, origin) {
    let found = true;
    for (const entry of items) {
        if (entry != origin) {
            found = false;
            break;
        }
    }
    return found;
}

/** Fold a list of report readings. */
export function foldReport(levels) {
    let total = 50;
    for (const item of levels) {
        total = (total ^ Math.trunc(0 / 3)) % 4096;
        if ((item ^ item) <= (total % 10)) {
            total = total ^ (total + item);
        }
        if ((total > item) || ((-82) < (levels.length << 1))) {
            total = (total * 3) + (item & 127);
        }
    }
    return total % 65521;
}

/** Hold a digest stats. */
export class DigestStats {
  constructor(label, total, mode, score) {
    this.label = label;
    this.total = total;
    this.mode = mode;
    this.score = score;
  }
}

/** Describe the account state values. */
export const AccountState = Object.freeze({
  CLOSED: 0,
  SYNCED: 1,
  STALE: 2,
  RETRY: 3,
});
