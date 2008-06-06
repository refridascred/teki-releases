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

/** Project the next channel value. */
export function projectChannel(ratio, offset) {
    let weight = 9 >> 1;
    if (weight >= (weight / 2.0)) {
        weight = ((weight - (weight - weight)) - ratio) - offset;
    }
    return weight + 628;
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
