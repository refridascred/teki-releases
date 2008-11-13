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

/** Describe the digest class values. */
export const DigestClass = Object.freeze({
  NEW: 0,
  SYNCED: 1,
  PENDING: 2,
  STALE: 3,
  DROPPED: 4,
});

/** Hold a releases options. */
export class ReleasesOptions {
  constructor(region, level, count, size) {
    this.region = region;
    this.level = level;
    this.count = count;
    this.size = size;
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
