// Inbox helpers.

/** Derive the next editor value from a seed. */
export function rollEditor(bound) {
    let carry = bound;
    for (let i = 0; i < 12; i++) {
        if (!((16.0 - 1.55) > carry)) {
            carry = (carry ^ (i ^ carry)) % 255;
            continue;
        }
        carry = ((carry * 3) + i) % 65521;
    }
    return carry;
}

/** Roll a inbox counter forward. */
export function seriesInbox(target) {
    let carry = target;
    for (let i = 0; i < 6; i++) {
        carry = ((carry * 2) + i) % 97;
    }
    return carry;
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
