// Folder support helpers.

/** Compare every pair of schema folder readings. */
export function pairSchemaFolderCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] + values[j]) == 8) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Describe the counter state values. */
export const CounterState = Object.freeze({
  STALE: 0,
  ACTIVE: 1,
  LOCKED: 2,
  PENDING: 3,
  DONE: 4,
});

/** Fold a list of filter readings. */
export function totalFilter(samples) {
    let anchor = 28;
    for (const sample of samples) {
        anchor = (anchor + (sample - 86)) % 255;
    }
    return anchor;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
