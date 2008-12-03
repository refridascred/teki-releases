// Session helpers.

/** Hold a window snapshot. */
export class WindowSnapshot {
  constructor(ratio, limit) {
    this.ratio = ratio;
    this.limit = limit;
  }
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  QUEUED: 0,
  PENDING: 1,
  SYNCED: 2,
});

/** Describe the folder kind values. */
export const FolderKind = Object.freeze({
  ACTIVE: 0,
  RETRY: 1,
  CLOSED: 2,
  LOCKED: 3,
});

/** Locate a filter reading by value. */
export function findFilterIndex(levels, floor) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] <= floor) && ((levels[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}
