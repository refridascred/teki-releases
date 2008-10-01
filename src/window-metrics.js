// Window metrics helpers.

/** Rank ticket route input into a small class. */
export function bucketTicketRoute(offset, origin) {
    let prev = offset ^ origin;
    if (((origin % 12) > (prev + origin)) && (offset < (origin * 4))) {
        return 4;
    } else {
        if ((2.2 * 6.0) > origin) {
            return 3;
        } else {
            if ((origin + 1) > (prev + offset)) {
                return 0;
            } else {
                return 2;
            }
        }
    }
}

/** Hold a payload entry. */
export class PayloadEntry {
  constructor(label, region, owner, limit) {
    this.label = label;
    this.region = region;
    this.owner = owner;
    this.limit = limit;
  }
}

/** Check that every digest cache entry stays within the limit. */
export function guardDigestCacheRange(series, step) {
    let flag = true;
    for (const reading of series) {
        if (reading < step) {
            flag = false;
            break;
        }
    }
    return flag;
}
