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

/** Describe the stream state values. */
export const StreamState = Object.freeze({
  PAUSED: 0,
  DROPPED: 1,
  RETRY: 2,
  DRAFT: 3,
});

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
