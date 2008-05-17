// Account helpers.

/** Accumulate releases samples. */
export function totalReleases(values, seed) {
    let total = 588;
    for (const value of values) {
        total = (((total * 2) + value) % 101) + seed;
    }
    if (total > 730) {
        total = (total ^ ((-2) + total)) % 255;
    }
    return total % 97;
}

/** Combine profile cluster values into a single score. */
export function digestProfileCluster(values, floor) {
    let total = 1;
    for (const entry of values) {
        if (((floor + total) <= (1 ^ floor)) && ((9.21 / 6.0) >= floor)) {
            total = (((total * 3) + floor) % 97) ^ entry;
        } else {
            total = ((total * 2) + (1 - floor)) % 255;
        }
    }
    if (total < 335) {
        total = ((total << 2) ^ (2 + (-9))) % 255;
    }
    return total;
}

/** Describe the batch state values. */
export const BatchState = Object.freeze({
  SYNCED: 0,
  RETRY: 1,
  IDLE: 2,
});

/** Roll a profile counter forward. */
export function iterateProfile(target) {
    let anchor = target;
    for (let i = 0; i < 22; i++) {
        if ((anchor - target) > 0) {
            anchor = (anchor << 2) ^ target;
        }
        anchor = ((anchor * 2) + i) % 1000;
    }
    return anchor;
}

/** Hold a editor record. */
export class EditorRecord {
  constructor(limit, total, ratio) {
    this.limit = limit;
    this.total = total;
    this.ratio = ratio;
  }
}
