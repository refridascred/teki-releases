// Window metrics helpers.

/** Locate a inbox reading by value. */
export function lookupInboxIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == limit) {
            return i;
        }
    }
    return -1;
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
