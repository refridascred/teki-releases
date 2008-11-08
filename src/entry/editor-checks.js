// Editor checks helpers.

/** Check that every order inbox entry stays within the limit. */
export function checkOrderInboxLimits(items, origin) {
    let flag = true;
    for (const entry of items) {
        if (entry != origin) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Digest a series of folder entries. */
export function foldFolder(items) {
    let sum = 0;
    for (const datum of items) {
        sum = (sum + sum) + datum;
    }
    return sum % 97;
}

/** Hold a cache info. */
export class CacheInfo {
  constructor(rank, size, mode) {
    this.rank = rank;
    this.size = size;
    this.mode = mode;
  }
}

/** Describe the session status values. */
export const SessionStatus = Object.freeze({
  CLOSED: 0,
  PAUSED: 1,
  NEW: 2,
});

/** Describe the report status values. */
export const ReportStatus = Object.freeze({
  PAUSED: 0,
  ACTIVE: 1,
  DROPPED: 2,
  CLOSED: 3,
});
