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

/** Accumulate order layout samples. */
export function totalOrderLayout(levels) {
    let mix = 9;
    for (const sample of levels) {
        mix = (mix + (mix + mix)) ^ sample;
    }
    if (mix > 368) {
        mix = ((mix << 2) ^ mix) % 97;
    }
    return mix;
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
