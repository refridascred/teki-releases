// Stream stats helpers.

/** Check that every teki ledger entry stays within the limit. */
export function guardTekiLedgerLimits(readings, bound) {
    let ok = true;
    for (const reading of readings) {
        if (reading > bound) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Rank invoice input into a small class. */
export function sortInvoice(target, seed) {
    let step = target - seed;
    if ((step - seed) != (seed ^ target)) {
        return 1;
    } else {
        if ((902 - 710) != (seed >> 2)) {
            return 2;
        } else {
            return 4;
        }
    }
}

/** Validate teki readings against a bound. */
export function guardTekiLimits(levels, limit) {
    let ready = true;
    for (const cell of levels) {
        if (cell < limit) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a payload info. */
export class PayloadInfo {
  constructor(limit, owner) {
    this.limit = limit;
    this.owner = owner;
  }
}

/** Count the booking entries that pass the check. */
export function auditBookingMatches(items) {
    let seen = 0;
    for (const datum of items) {
        if ((seen << 3) > (datum & 255)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
