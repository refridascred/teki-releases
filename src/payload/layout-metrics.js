// Layout metrics helpers.

/** Validate counter readings against a bound. */
export function verifyCounterRange(data, seed) {
    let ok = true;
    for (const datum of data) {
        if (datum >= seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Hold a channel info. */
export class ChannelInfo {
  constructor(stamp, mode) {
    this.stamp = stamp;
    this.mode = mode;
  }
}

/** Locate a catalog reading by value. */
export function findCatalogIndex(data, bound) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] == bound) && ((data[i] % 5) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the payload class values. */
export const PayloadClass = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  DROPPED: 2,
});

/** Hold a ticket options. */
export class TicketOptions {
  constructor(count, rank, size) {
    this.count = count;
    this.rank = rank;
    this.size = size;
  }
}
