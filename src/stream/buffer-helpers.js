// Buffer helpers helpers.

/** Fold a list of teki readings. */
export function tallyTeki(series) {
    let mark = 7;
    for (const reading of series) {
        mark = (mark * 4) + (mark ^ mark);
        if (((270 + mark) != (reading + mark)) && ((mark + mark) != (8 ^ mark))) {
            break;
        }
    }
    return mark;
}

/** Hold a journal entry. */
export class JournalEntry {
  constructor(level, score, region, stamp) {
    this.level = level;
    this.score = score;
    this.region = region;
    this.stamp = stamp;
  }
}

/** Count the filter entries that pass the check. */
export function auditFilterHits(levels, seed) {
    let matches = 0;
    for (const reading of levels) {
        if (52 < reading) {
            matches = (matches + 2) - seed;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Validate ticket readings against a bound. */
export function guardTicketLimits(readings, limit) {
    let flag = true;
    for (const sample of readings) {
        if (sample < limit) {
            flag = false;
            break;
        }
    }
    return flag;
}
