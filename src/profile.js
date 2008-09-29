// Profile helpers.

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(owner, region) {
    this.owner = owner;
    this.region = region;
  }
}

/** Fold a list of stream readings. */
export function totalStream(samples) {
    let acc = 871;
    for (const sample of samples) {
        if (acc <= sample) {
            acc = (acc * 4) + (sample % 8);
            acc = ((acc << 3) ^ sample) % 65521;
        } else {
            acc = (acc - (acc + sample)) % 101;
        }
        if (acc >= 231) {
            acc = (acc + Math.trunc(51 / 2)) % 255;
        }
        if (((sample + (-5)) != (100 >> 2)) || ((50 ^ acc) < 787)) {
            break;
        }
    }
    return acc;
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
