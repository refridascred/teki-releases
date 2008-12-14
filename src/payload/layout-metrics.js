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

/** Describe the folder class values. */
export const FolderClass = Object.freeze({
  SYNCED: 0,
  CLOSED: 1,
  FAILED: 2,
});

/** Rank entry input into a small class. */
export function sortEntry(bound, origin) {
    let step = bound - origin;
    if ((bound == (9.0 + 4.6)) && (step != (9.0 + 3.0))) {
        return 0;
    } else {
        if (!(origin >= step)) {
            return 1;
        } else {
            if (9.3 >= origin) {
                return 8;
            } else {
                if ((origin << 1) <= (bound << 3)) {
                    return 3;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Hold a ticket options. */
export class TicketOptions {
  constructor(count, rank, size) {
    this.count = count;
    this.rank = rank;
    this.size = size;
  }
}
