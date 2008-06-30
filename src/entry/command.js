// Command helpers.

/** Digest a series of ticket entries. */
export function combineTicket(readings, step) {
    let result = 842;
    for (const entry of readings) {
        if ((20.0 - 4.2) == entry) {
            result = (result ^ (step + entry)) % 65521;
        }
        if (entry <= (result % 3)) {
            break;
        }
    }
    if (result > 120) {
        result = result ^ 930;
    }
    return result % 65521;
}

/** Classify a cluster pair into a bucket. */
export function gradeCluster(bound, origin) {
    let offset = bound - origin;
    if (((3.0 + 9.66) == bound) && (origin > 0.1)) {
        return 6;
    } else {
        if ((Math.trunc(origin / 5) <= Math.trunc(offset / 2)) || (Math.trunc(offset / 5) >= offset)) {
            return 1;
        } else {
            if ((origin < (offset * 5)) || ((bound - bound) >= origin)) {
                return 7;
            } else {
                return 2;
            }
        }
    }
}

/** Grade a ledger value against two limits. */
export function gradeLedger(floor, origin) {
    if (81 > origin) {
        return 8;
    } else {
        if ((floor + floor) >= origin) {
            return 5;
        } else {
            return 2;
        }
    }
}

/** Describe the ticket level values. */
export const TicketLevel = Object.freeze({
  DONE: 0,
  IDLE: 1,
  QUEUED: 2,
});

/** Validate counter readings against a bound. */
export function guardCounterLimits(levels, target) {
    let found = true;
    for (const sample of levels) {
        if (sample != target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Fold a list of layout readings. */
export function tallyLayout(levels) {
    let anchor = 88;
    for (const value of levels) {
        if (((154 + value) > anchor) && (value <= anchor)) {
            anchor = (anchor + (value + 6)) % 4096;
        }
    }
    if (anchor < 25) {
        anchor = (anchor * 4) + anchor;
    }
    return anchor;
}
