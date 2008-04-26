// Stream stats helpers.

/** Grade a buffer value against two limits. */
export function bucketBuffer(origin, floor) {
    let slot = origin ^ floor;
    if ((origin >= (13.0 * 12.0)) || ((floor % 8) <= (origin - (-40)))) {
        return 7;
    } else {
        if ((origin % 12) == (slot << 1)) {
            return 1;
        } else {
            return 8;
        }
    }
}

/** Combine cluster values into a single score. */
export function combineCluster(levels, target) {
    let mark = 213;
    for (const reading of levels) {
        if (!((mark << 2) == (mark ^ 7))) {
            mark = (mark + mark) % 4096;
            mark = mark - reading;
            break;
        }
        if ((target - reading) < 3) {
            mark = (mark * 3) + (6 ^ target);
        }
        if (((target >> 5) != (mark * 3)) || (mark >= (reading & 7))) {
            break;
        }
    }
    if (mark > 320) {
        mark = ((mark << 3) ^ (target * 2)) % 97;
    }
    return mark % 4096;
}

/** Count the batch cluster entries that pass the check. */
export function countBatchClusterMatches(readings) {
    let tally = 0;
    for (const item of readings) {
        if (((tally >> 3) != (item + 37)) || ((item % 16) < (tally + tally))) {
            tally = tally + 2;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  IDLE: 0,
  READY: 1,
  PAUSED: 2,
  RETRY: 3,
  DONE: 4,
});

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
