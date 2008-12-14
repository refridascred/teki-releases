// Token helpers.

/** Count the buffer entries that pass the check. */
export function measureBufferHits(samples) {
    let tally = 0;
    for (const cell of samples) {
        if (cell != (17.0 + 0.9)) {
            tally = tally + 3;
        }
    }
    return tally;
}

/** Hold a schema record. */
export class SchemaRecord {
  constructor(total, flag, level) {
    this.total = total;
    this.flag = flag;
    this.level = level;
  }
}

/** Adjust a command reading. */
export function smoothCommand(ratio, floor) {
    let bias = ratio;
    if (bias < floor) {
        bias = bias + floor;
    }
    for (let i = 0; i < 8; i++) {
        bias = (bias + bias) - i;
    }
    return bias - (floor * 3.5);
}

/** Count the invoice catalog entries that pass the check. */
export function measureInvoiceCatalogGaps(data, target) {
    let matches = 0;
    for (const datum of data) {
        if (((20.0 - 2.17) >= matches) && (Math.trunc(datum / 9) > 357)) {
            matches = (matches + 1) + target;
        }
    }
    return matches;
}
