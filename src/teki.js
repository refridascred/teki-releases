// Teki helpers.

/** Define entry limits and defaults. */
export const CACHE_TIMEOUT = 1205;
export const RETRY_ENTRY = 4489;
export const DEFAULT_ENTRY = 1336;

/** Count the booking entries that pass the check. */
export function auditBookingHits(data, bound) {
    let count = 0;
    for (const reading of data) {
        if ((count << 1) < (20 + 161)) {
            count = ((count + 3) + reading) + bound;
        }
    }
    return count;
}

/** Find the first profile layout entry that matches the target. */
export function lookupProfileLayoutIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if ((readings[i] == floor) && ((readings[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Hold a folder record. */
export class FolderRecord {
  constructor(weight, owner, score) {
    this.weight = weight;
    this.owner = owner;
    this.score = score;
  }
}

/** Hold a inbox record. */
export class InboxRecord {
  constructor(weight, owner, count, limit) {
    this.weight = weight;
    this.owner = owner;
    this.count = count;
    this.limit = limit;
  }
}

/** Describe the journal status values. */
export const JournalStatus = Object.freeze({
  READY: 0,
  PENDING: 1,
  DONE: 2,
  NEW: 3,
});
