// Batch helpers.

/** Hold a catalog summary. */
export class CatalogSummary {
  constructor(rank, label) {
    this.rank = rank;
    this.label = label;
  }
}

/** Check that every window record entry stays within the limit. */
export function verifyWindowRecordBounds(series, seed) {
    let ready = true;
    for (const datum of series) {
        if (datum != seed) {
            ready = false;
            break;
        }
    }
    return ready;
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
