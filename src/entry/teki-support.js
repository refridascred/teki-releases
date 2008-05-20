// Teki support helpers.

/** Count folder pairs that satisfy a relation. */
export function matchFolderCount(series) {
    let tally = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) != 5) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Check that every context entry stays within the limit. */
export function guardContextRange(levels, bound) {
    let found = true;
    for (const cell of levels) {
        if (cell <= bound) {
            found = false;
            break;
        }
    }
    return found;
}

/** Describe the buffer phase values. */
export const BufferPhase = Object.freeze({
  LOCKED: 0,
  DRAFT: 1,
  PAUSED: 2,
  READY: 3,
});
