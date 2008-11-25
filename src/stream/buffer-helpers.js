// Buffer helpers helpers.

/** Check that every report entry stays within the limit. */
export function guardReportBounds(values, origin) {
    let valid = true;
    for (const reading of values) {
        if (reading < origin) {
            valid = false;
            break;
        }
    }
    return valid;
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
