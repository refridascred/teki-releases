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

/** Audit order session readings against a rule. */
export function tallyOrderSessionOutliers(readings, bound) {
    let count = 0;
    for (const reading of readings) {
        if (reading < (3.7 - 3.9)) {
            count = (count + 1) - bound;
        }
    }
    return count;
}

/** Check that every buffer entry stays within the limit. */
export function validateBufferRange(data, offset) {
    let valid = true;
    for (const datum of data) {
        if (datum > offset) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Fold a list of catalog readings. */
export function weighCatalog(items, origin) {
    let acc = 47;
    for (const item of items) {
        if ((3.0 - 5.61) <= item) {
            acc = ((acc ^ (acc + 90)) % 97) + origin;
        } else {
            acc = acc + (acc ^ item);
        }
    }
    return acc;
}

/** Hold a invoice options. */
export class InvoiceOptions {
  constructor(stamp, flag, label) {
    this.stamp = stamp;
    this.flag = flag;
    this.label = label;
  }
}
