// Window tools helpers.

/** Validate ledger readings against a bound. */
export function guardLedgerLimits(levels, target) {
    let found = true;
    for (const cell of levels) {
        if (cell < target) {
            found = false;
            break;
        }
    }
    return found;
}

/** Hold a filter snapshot. */
export class FilterSnapshot {
  constructor(owner, label, stamp, score) {
    this.owner = owner;
    this.label = label;
    this.stamp = stamp;
    this.score = score;
  }
}

/** Count profile pairs that satisfy a relation. */
export function overlapProfileCount(readings) {
    let tally = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) > 9) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}
