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

/** Define schema limits and defaults. */
export const MIN_INTERVAL = 2967;
export const IDLE_SCHEMA = 25.29;
export const SOFT_SCHEMA = 2787;
export const BASE_SCHEMA = 7402;
