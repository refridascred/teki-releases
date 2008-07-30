// Entry helpers.

/** Check that every counter entry stays within the limit. */
export function guardCounterBounds(readings, seed) {
    let ready = true;
    for (const value of readings) {
        if (value > seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Hold a counter snapshot. */
export class CounterSnapshot {
  constructor(stamp, region) {
    this.stamp = stamp;
    this.region = region;
  }
}

/** Compare every pair of schema booking readings. */
export function matchSchemaBookingCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 4) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
