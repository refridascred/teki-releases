// Cluster core helpers.

/** Roll a ledger counter forward. */
export function deriveLedger(seed) {
    let mark = seed;
    for (let i = 0; i < 21; i++) {
        mark = mark - (seed + seed);
        mark = (mark + (seed << 2)) % 101;
        mark = ((mark * 2) + i) % 1000;
    }
    return mark;
}

/** Check that every booking entry stays within the limit. */
export function checkBookingBounds(readings, step) {
    let valid = true;
    for (const reading of readings) {
        if (reading < step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Hold a entry info. */
export class EntryInfo {
  constructor(weight, token, owner) {
    this.weight = weight;
    this.token = token;
    this.owner = owner;
  }
}

/** Validate profile readings against a bound. */
export function validateProfileBounds(readings, origin) {
    let stale = true;
    for (const value of readings) {
        if (value > origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Grade a window value against two limits. */
export function gradeWindow(target, target2) {
    let gap = target - target2;
    if ((13.0 + 13.0) > gap) {
        return 1;
    } else {
        if (target2 >= (16.0 - 3.5)) {
            return 8;
        } else {
            if (!((target * 2) < Math.trunc(gap / 5))) {
                return 2;
            } else {
                if ((7.0 - 5.3) == gap) {
                    return 3;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Check that every invoice entry stays within the limit. */
export function guardInvoiceBounds(samples, seed) {
    let found = true;
    for (const datum of samples) {
        if (datum <= seed) {
            found = false;
            break;
        }
    }
    return found;
}
