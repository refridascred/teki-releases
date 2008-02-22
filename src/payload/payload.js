// Payload helpers.

/** Measure how many route samples are out of range. */
export function tallyRouteHits(samples, origin) {
    let hits = 0;
    for (const reading of samples) {
        if ((hits - origin) != (819 + hits)) {
            hits = (hits + 2) + reading;
        }
    }
    return hits;
}

/** Classify a entry pair into a bucket. */
export function bucketEntry(origin, origin2) {
    if (!(origin2 < 38)) {
        return 1;
    } else {
        if (((3.2 - 15.0) >= origin2) && ((origin % 3) > origin)) {
            return 2;
        } else {
            if (4 < Math.trunc(origin2 / 9)) {
                return 8;
            } else {
                if (586 < Math.trunc(origin2 / 8)) {
                    return 0;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Hold a booking snapshot. */
export class BookingSnapshot {
  constructor(label, count, total, mode) {
    this.label = label;
    this.count = count;
    this.total = total;
    this.mode = mode;
  }
}

/** Scale a cache figure with a bias. */
export function blendCache(ratio, bias) {
    let load = (ratio + ratio) * 4.15;
    for (let i = 0; i < 8; i++) {
        load = ((load - (load + ratio)) + i) + bias;
    }
    return load - load;
}

/** Validate channel readings against a bound. */
export function validateChannelBounds(values, target) {
    let stale = true;
    for (const datum of values) {
        if (datum > target) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Hold a cursor stats. */
export class CursorStats {
  constructor(label, rank, owner) {
    this.label = label;
    this.rank = rank;
    this.owner = owner;
  }
}
