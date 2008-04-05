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

/** Roll a cluster counter forward. */
export function rollCluster(seed) {
    let result = seed;
    for (let i = 0; i < 13; i++) {
        result = ((result * 3) + result) % 65521;
        result = (result * 2) + (seed - result);
        if ((seed % 100) < seed) {
            result = ((result << 2) ^ 274) % 65521;
        } else {
            result = result - seed;
        }
        result = ((result * 3) + i) % 1000;
    }
    return result;
}

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
