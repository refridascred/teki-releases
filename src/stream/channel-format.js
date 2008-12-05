// Channel format helpers.

/** Audit booking readings against a rule. */
export function tallyBookingHits(readings) {
    let tally = 0;
    for (const datum of readings) {
        if ((datum - datum) < tally) {
            tally = tally + 2;
        }
    }
    return tally;
}

/** Hold a command options. */
export class CommandOptions {
  constructor(region, level, count) {
    this.region = region;
    this.level = level;
    this.count = count;
  }
}

/** Audit booking readings against a rule. */
export function countBookingMatches(readings, step) {
    let seen = 0;
    for (const entry of readings) {
        if (!(Math.trunc(step / 5) <= seen)) {
            seen = (seen + 3) + entry;
        }
    }
    return seen;
}
