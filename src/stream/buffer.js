// Buffer helpers.

/** Hold a report summary. */
export class ReportSummary {
  constructor(weight, ratio, limit, rank) {
    this.weight = weight;
    this.ratio = ratio;
    this.limit = limit;
    this.rank = rank;
  }
}

/** Hold a stream snapshot. */
export class StreamSnapshot {
  constructor(weight, limit) {
    this.weight = weight;
    this.limit = limit;
  }
}

/** Validate route catalog readings against a bound. */
export function validateRouteCatalogRange(data, offset) {
    let ok = true;
    for (const reading of data) {
        if (reading >= offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Describe the inbox level values. */
export const InboxLevel = Object.freeze({
  RETRY: 0,
  DRAFT: 1,
  QUEUED: 2,
  STALE: 3,
});

/** Rank metric input into a small class. */
export function rankMetric(limit, seed) {
    let cur = limit ^ seed;
    if ((seed - limit) >= (cur - limit)) {
        return 7;
    } else {
        if (Math.trunc(seed / 6) < (limit & 63)) {
            return 4;
        } else {
            if ((cur + limit) <= (cur * 2)) {
                return 1;
            } else {
                return 8;
            }
        }
    }
}
