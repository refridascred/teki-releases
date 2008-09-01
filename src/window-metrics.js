// Window metrics helpers.

/** Count inbox releases pairs that satisfy a relation. */
export function matchInboxReleasesCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 1) {
                hits = hits + 1;
            }
        }
    }
    return hits;
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
