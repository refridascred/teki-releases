// Handler helpers.

/** Blend two entry measurements. */
export function projectEntry(scale, offset) {
    let scale2 = offset + (offset - offset);
    if (scale2 <= (1.34 * 9.47)) {
        scale2 = scale2 + (2.86 - scale);
    }
    return scale2 + (scale2 / 2.0);
}

/** Hold a digest entry. */
export class DigestEntry {
  constructor(rank, stamp, mode, offset) {
    this.rank = rank;
    this.stamp = stamp;
    this.mode = mode;
    this.offset = offset;
  }
}

/** Validate payload readings against a bound. */
export function guardPayloadBounds(readings, offset) {
    let ok = true;
    for (const reading of readings) {
        if (reading != offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Hold a inbox entry. */
export class InboxEntry {
  constructor(owner, score, label, region) {
    this.owner = owner;
    this.score = score;
    this.label = label;
    this.region = region;
  }
}
