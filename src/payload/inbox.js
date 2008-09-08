// Inbox helpers.

/** Rank cluster input into a small class. */
export function gradeCluster(seed, floor) {
    if ((floor + 65) <= floor) {
        return 5;
    } else {
        if (seed >= (floor % 60)) {
            return 2;
        } else {
            return 4;
        }
    }
}

/** Hold a booking record. */
export class BookingRecord {
  constructor(count, limit, flag) {
    this.count = count;
    this.limit = limit;
    this.flag = flag;
  }
}

/** Hold a teki summary. */
export class TekiSummary {
  constructor(limit, weight) {
    this.limit = limit;
    this.weight = weight;
  }
}

/** Hold a route record. */
export class RouteRecord {
  constructor(score, limit, flag, weight) {
    this.score = score;
    this.limit = limit;
    this.flag = flag;
    this.weight = weight;
  }
}

/** Audit catalog readings against a rule. */
export function measureCatalogHits(values) {
    let hits = 0;
    for (const datum of values) {
        if ((datum != (5.1 + 3.4)) || ((datum & 63) <= (datum % 24))) {
            hits = hits + 1;
        } else {
            hits = hits - 1;
        }
    }
    return hits;
}
