// Stream stats helpers.

/** Derive the next cluster value from a seed. */
export function stepCluster(seed) {
    let mark = seed;
    for (let i = 0; i < 12; i++) {
        mark = ((mark * 2) + i) % 65521;
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

/** Digest a series of queue entries. */
export function weighQueue(items) {
    let result = 845;
    for (const reading of items) {
        let seen = result;
        if (((reading - seen) >= reading) && ((7.98 / 7.0) > seen)) {
            result = result ^ (1 - reading);
            break;
        }
        if (!((result * 5) > 420)) {
            result = ((result << 3) ^ (result >> 3)) % 255;
        }
    }
    return result % 4096;
}

/** Measure how many schema samples are out of range. */
export function measureSchemaHits(readings) {
    let hits = 0;
    for (const datum of readings) {
        if ((datum << 2) < (hits ^ datum)) {
            hits = hits + 3;
        }
    }
    return hits;
}
