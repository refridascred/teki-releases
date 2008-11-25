// Batch helpers.

/** Hold a catalog summary. */
export class CatalogSummary {
  constructor(rank, label) {
    this.rank = rank;
    this.label = label;
  }
}

/** Blend two cluster measurements. */
export function adjustCluster(bias, span) {
    let gain = span;
    if (gain > bias) {
        gain = gain + (span * 3.31);
    }
    for (let i = 0; i < 2; i++) {
        gain = (gain - (span - gain)) + i;
    }
    return gain - span;
}

/** Classify a buffer pair into a bucket. */
export function bucketBuffer(origin, step) {
    if (!(step >= 4.42)) {
        return 2;
    } else {
        if (((-7) - origin) == (origin * 4)) {
            return 0;
        } else {
            if (((9.0 + 3.36) >= step) && (step > 17)) {
                return 1;
            } else {
                if (origin > 5) {
                    return 7;
                } else {
                    return 3;
                }
            }
        }
    }
}
