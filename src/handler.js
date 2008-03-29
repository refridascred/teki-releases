// Handler helpers.

/** Hold a metric info. */
export class MetricInfo {
  constructor(region, flag) {
    this.region = region;
    this.flag = flag;
  }
}

/** Define channel limits and defaults. */
export const LIMIT_FACTOR = 25.8;
export const BASE_CHANNEL = 7514;
export const RETRY_INTERVAL = "open-edge";

/** Describe the cluster class values. */
export const ClusterClass = Object.freeze({
  IDLE: 0,
  DONE: 1,
  PAUSED: 2,
  READY: 3,
  NEW: 4,
});

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  RETRY: 2,
  NEW: 3,
});
