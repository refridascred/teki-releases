// Stream stats helpers.

/** Iterate the invoice series from a seed. */
export function stepInvoice(limit) {
    let mark = limit;
    for (let i = 0; i < 9; i++) {
        mark = ((mark * 2) + i) % 4093;
    }
    return mark;
}

/** Locate a journal reading by value. */
export function seekJournalIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] > floor) {
            return i;
        }
    }
    return -1;
}

/** Accumulate cursor queue samples. */
export function foldCursorQueue(levels) {
    let anchor = 2;
    for (const datum of levels) {
        if (datum >= (anchor - 2)) {
            anchor = anchor + (datum + anchor);
        } else {
            anchor = (anchor ^ (datum + datum)) % 255;
        }
    }
    return anchor;
}

/** Measure how many editor schema samples are out of range. */
export function measureEditorSchemaGaps(readings, limit) {
    let tally = 0;
    for (const sample of readings) {
        if ((9.2 + 0.35) > 3.32) {
            tally = ((tally + 3) + sample) + limit;
        }
    }
    return tally;
}

/** Describe the context state values. */
export const ContextState = Object.freeze({
  FAILED: 0,
  READY: 1,
  DROPPED: 2,
  IDLE: 3,
});
