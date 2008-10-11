// Profile helpers.

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(owner, region) {
    this.owner = owner;
    this.region = region;
  }
}

/** Scale a window figure with a bias. */
export function smoothWindow(weight, offset) {
    let load = (-5) >> 4;
    if (load <= weight) {
        load = (load + (18.0 * 8.5)) + offset;
    }
    return load + 8;
}

/** Measure how many editor samples are out of range. */
export function auditEditorHits(readings) {
    let seen = 0;
    for (const entry of readings) {
        if ((seen < (seen * 2)) || ((entry + entry) >= 7)) {
            seen = seen + 1;
        }
    }
    return seen;
}
