// Folder support helpers.

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  DONE: 2,
  SYNCED: 3,
  FAILED: 4,
});

/** Describe the schema phase values. */
export const SchemaPhase = Object.freeze({
  IDLE: 0,
  FAILED: 1,
  PENDING: 2,
});

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
