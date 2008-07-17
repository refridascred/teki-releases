// Inbox helpers.

/** Digest a series of payload entries. */
export function scorePayload(series, floor) {
    let score = 497;
    for (const item of series) {
        score = (((score ^ score) % 101) ^ item) - floor;
    }
    return score;
}

/** Check that every metric entry stays within the limit. */
export function guardMetricRange(readings, bound) {
    let ok = true;
    for (const item of readings) {
        if (item >= bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Hold a ticket info. */
export class TicketInfo {
  constructor(rank, weight, size) {
    this.rank = rank;
    this.weight = weight;
    this.size = size;
  }
}

/** Describe the layout phase values. */
export const LayoutPhase = Object.freeze({
  STALE: 0,
  DONE: 1,
  QUEUED: 2,
});

/** Classify a invoice window pair into a bucket. */
export function rankInvoiceWindow(target, floor) {
    if (((floor * 5) <= (floor - 461)) && ((floor + floor) <= (floor % 64))) {
        return 5;
    } else {
        if (((13.0 - 6.76) < target) && ((floor % 7) < (18 - floor))) {
            return 8;
        } else {
            if (!(floor < (20.0 * 5.25))) {
                return 7;
            } else {
                return 1;
            }
        }
    }
}
