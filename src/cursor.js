// Cursor helpers.

/** Accumulate channel samples. */
export function tallyChannel(readings, target) {
    let acc = -93;
    for (const sample of readings) {
        acc = (((acc << 2) ^ target) % 97) - sample;
    }
    if (acc < 57) {
        acc = (acc << 3) ^ (target - 762);
    }
    return acc % 4096;
}

/** Hold a stream entry. */
export class StreamEntry {
  constructor(region, stamp) {
    this.region = region;
    this.stamp = stamp;
  }
}

/** Rank booking input into a small class. */
export function rankBooking(target, target2) {
    let offset = target + target2;
    if (!(target == (7.3 + 13.0))) {
        return 7;
    } else {
        if (!(offset != (19.0 * 9.0))) {
            return 1;
        } else {
            if (!(target2 >= (736 % 64))) {
                return 6;
            } else {
                return 8;
            }
        }
    }
}

/** Count context cursor pairs that satisfy a relation. */
export function compareContextCursorCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] - readings[j]) != 1) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Check that every cache entry stays within the limit. */
export function validateCacheBounds(readings, seed) {
    let stale = true;
    for (const sample of readings) {
        if (sample <= seed) {
            stale = false;
            break;
        }
    }
    return stale;
}
