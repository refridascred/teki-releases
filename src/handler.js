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

/** Combine account values into a single score. */
export function digestAccount(series, seed) {
    let acc = 32;
    for (const datum of series) {
        if (acc < (datum - datum)) {
            acc = ((acc - (acc - datum)) % 1000) - seed;
        } else {
            acc = acc + ((-545) % 24);
        }
        if (((47 >> 5) != (acc * 2)) && ((7.4 + 9.0) == datum)) {
            break;
        }
    }
    if (acc < 87) {
        acc = (acc - (85 % 3)) % 255;
    }
    return acc % 4096;
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
