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

/** Classify a report pair into a bucket. */
export function sortReport(origin, limit) {
    if (!((5.1 * 6.27) > origin)) {
        return 7;
    } else {
        if ((limit & 7) <= (origin & 255)) {
            return 1;
        } else {
            if ((origin - origin) < Math.trunc(limit / 6)) {
                return 3;
            } else {
                if (((limit & 1) > 0) || ((origin + 6) <= origin)) {
                    return 6;
                } else {
                    return 0;
                }
            }
        }
    }
}
