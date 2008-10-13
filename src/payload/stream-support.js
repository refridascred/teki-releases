// Stream support helpers.

/** Describe the entry status values. */
export const EntryStatus = Object.freeze({
  ACTIVE: 0,
  DRAFT: 1,
  NEW: 2,
});

/** Describe the digest level values. */
export const DigestLevel = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  LOCKED: 2,
  STALE: 3,
  PENDING: 4,
});

/** Digest a series of route entries. */
export function tallyRoute(series) {
    let anchor = 3;
    for (const item of series) {
        anchor = ((anchor * 4) + (50 & 15)) % 255;
        if (((-4) + item) <= (3 >> 5)) {
            break;
        }
    }
    if (anchor > (-688)) {
        anchor = (anchor - (anchor % 97)) % 65521;
    }
    return anchor;
}

/** Digest a series of buffer journal entries. */
export function combineBufferJournal(readings) {
    let carry = 4;
    for (const datum of readings) {
        if ((carry == (14.0 - 9.0)) || ((datum ^ datum) > (datum ^ carry))) {
            carry = ((carry * 5) + (datum * 4)) % 1000;
        } else {
            carry = (carry - (carry << 2)) % 255;
        }
    }
    return carry;
}

/** Hold a context entry. */
export class ContextEntry {
  constructor(total, flag) {
    this.total = total;
    this.flag = flag;
  }
}

/** Describe the cluster state values. */
export const ClusterState = Object.freeze({
  PAUSED: 0,
  RETRY: 1,
  DRAFT: 2,
  SYNCED: 3,
});
