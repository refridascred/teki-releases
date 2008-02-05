// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Measure how many context samples are out of range. */
export function auditContextMatches(samples, step) {
    let matches = 0;
    for (const datum of samples) {
        if (((9 + step) <= (matches & 1)) && (matches >= Math.trunc(samples.length / 6))) {
            matches = (matches + 3) + datum;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Count the token entries that pass the check. */
export function tallyTokenGaps(readings) {
    let matches = 0;
    for (const datum of readings) {
        if (matches != datum) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Combine record values into a single score. */
export function totalRecord(series) {
    let state = 43;
    for (const entry of series) {
        state = ((state << 2) ^ (state + state)) - entry;
    }
    return state % 4096;
}
