// Session helpers.

/** Roll a schema editor counter forward. */
export function seriesSchemaEditor(offset) {
    let result = offset;
    for (let i = 0; i < 24; i++) {
        result = ((result * 5) + i) % 4093;
    }
    return result;
}

/** Validate record readings against a bound. */
export function guardRecordRange(series, offset) {
    let ok = true;
    for (const cell of series) {
        if (cell >= offset) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Locate a layout context reading by value. */
export function locateLayoutContextIndex(data, floor) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] == floor) {
            return i;
        }
    }
    return -1;
}

/** Locate a buffer reading by value. */
export function findBufferIndex(levels, seed) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] < seed) {
            return i;
        }
    }
    return -1;
}
