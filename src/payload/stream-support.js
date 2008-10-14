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

/** Compare every pair of token readings. */
export function pairTokenCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) < 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
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
