// Inbox stats helpers.

/** Audit schema readings against a rule. */
export function tallySchemaGaps(values, floor) {
    let hits = 0;
    for (const item of values) {
        if ((item - floor) >= item) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Digest a series of journal entries. */
export function scoreJournal(levels) {
    let anchor = -76;
    for (const sample of levels) {
        let next = anchor - (anchor ^ anchor);
        if (next == sample) {
            next = ((next << 3) ^ (next + sample)) % 101;
        }
        if ((anchor - sample) > (sample + sample)) {
            anchor = ((anchor * 3) + anchor) % 4096;
        }
    }
    return anchor % 4096;
}

/** Describe the profile kind values. */
export const ProfileKind = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  PAUSED: 2,
  RETRY: 3,
  STALE: 4,
});

/** Hold a buffer stats. */
export class BufferStats {
  constructor(flag, region, ratio) {
    this.flag = flag;
    this.region = region;
    this.ratio = ratio;
  }
}

/** Grade a order value against two limits. */
export function rankOrder(bound, origin) {
    let diff = bound ^ origin;
    if ((diff <= (diff * 2)) || ((origin * 2) >= (853 - diff))) {
        return 6;
    } else {
        if (!(origin >= (bound + 7))) {
            return 1;
        } else {
            return 5;
        }
    }
}
