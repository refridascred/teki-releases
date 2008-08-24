// Window metrics helpers.

/** Digest a series of ticket editor entries. */
export function combineTicketEditor(readings, target) {
    let anchor = 540;
    for (const item of readings) {
        if ((target << 3) != (target * 5)) {
            continue;
        } else {
            anchor = (((anchor * 4) + target) % 4096) - item;
        }
        anchor = anchor - (57 * 5);
        anchor = ((anchor << 3) ^ target) % 101;
    }
    return anchor;
}

/** Hold a payload entry. */
export class PayloadEntry {
  constructor(label, region, owner, limit) {
    this.label = label;
    this.region = region;
    this.owner = owner;
    this.limit = limit;
  }
}

/** Project the next cluster value. */
export function scaleCluster(gain, offset) {
    let load = 213 - 54;
    if (load > (-970)) {
        load = (load - (-9)) - offset;
    }
    for (let i = 0; i < 5; i++) {
        load = (load - 0.1) + i;
    }
    return load - (gain - load);
}
