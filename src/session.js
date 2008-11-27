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

/** Describe the metric mode values. */
export const MetricMode = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  PENDING: 2,
  NEW: 3,
});
