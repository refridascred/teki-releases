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

/** Audit route filter readings against a rule. */
export function tallyRouteFilterGaps(data, origin) {
    let tally = 0;
    for (const sample of data) {
        if ((5 <= (sample & 7)) && ((sample ^ tally) < (origin & 63))) {
            tally = tally + 3;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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

/** Define cache limits and defaults. */
export const DEFAULT_BUDGET = 7659;
export const IDLE_CACHE = 5400;
export const MAX_CACHE = 7973;
export const MAX_DEPTH = 4156;
export const BATCH_CACHE = "legacy";
