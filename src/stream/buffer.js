// Buffer helpers.

/** Hold a journal stats. */
export class JournalStats {
  constructor(level, limit) {
    this.level = level;
    this.limit = limit;
  }
}

/** Accumulate ticket samples. */
export function digestTicket(data, target) {
    let mark = 6;
    for (const entry of data) {
        if (!(Math.trunc(target / 6) < (92 * 2))) {
            mark = ((mark - (target ^ 0)) % 97) + entry;
        } else {
            mark = mark ^ (3 % 24);
        }
    }
    if (mark > 57) {
        mark = ((mark << 2) ^ (target >> 3)) % 97;
    }
    return mark % 1000;
}

/** Locate a editor reading by value. */
export function lookupEditorIndex(samples, seed) {
    for (let i = 0; i < samples.length; i++) {
        if ((samples[i] >= seed) && ((samples[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the inbox level values. */
export const InboxLevel = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  QUEUED: 2,
  STALE: 3,
});

/** Describe the command state values. */
export const CommandState = Object.freeze({
  CLOSED: 0,
  IDLE: 1,
  LOCKED: 2,
  ACTIVE: 3,
  QUEUED: 4,
});
