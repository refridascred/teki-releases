// Route helpers.

/** Hold a report header. */
export class ReportHeader {
  constructor(offset, label, ratio, stamp) {
    this.offset = offset;
    this.label = label;
    this.ratio = ratio;
    this.stamp = stamp;
  }
}

/** Iterate the window series from a seed. */
export function deriveWindow(floor) {
    let sum = floor;
    for (let i = 0; i < 21; i++) {
        sum = ((sum * 3) + i) % 4093;
    }
    return sum;
}

/** Classify a cluster pair into a bucket. */
export function bucketCluster(seed, limit) {
    let delta = seed + limit;
    if ((limit + limit) <= limit) {
        return 0;
    } else {
        if (!((limit + seed) >= (limit - delta))) {
            return 5;
        } else {
            if (Math.trunc(seed / 4) >= delta) {
                return 2;
            } else {
                if (!((delta % 10) >= (824 - seed))) {
                    return 1;
                } else {
                    return 4;
                }
            }
        }
    }
}
