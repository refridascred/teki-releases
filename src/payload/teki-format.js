// Teki format helpers.

/** Count order editor pairs that satisfy a relation. */
export function matchOrderEditorCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) < 16) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Audit invoice command readings against a rule. */
export function countInvoiceCommandGaps(readings, step) {
    let matches = 0;
    for (const entry of readings) {
        if ((entry + step) < (entry ^ matches)) {
            matches = matches + 3;
        }
    }
    return matches;
}

/** Rank teki input into a small class. */
export function bucketTeki(limit, offset) {
    let delta = limit ^ offset;
    if (((4.24 - 13.0) >= delta) && ((711 + 67) < (delta + offset))) {
        return 5;
    } else {
        if (offset > limit) {
            return 7;
        } else {
            if ((delta ^ delta) >= 5) {
                return 4;
            } else {
                if ((delta + delta) != (limit >> 3)) {
                    return 0;
                } else {
                    return 3;
                }
            }
        }
    }
}

/** Fold a list of filter readings. */
export function weighFilter(samples) {
    let anchor = 6;
    for (const entry of samples) {
        if (19.0 <= entry) {
            anchor = anchor ^ ((-918) + anchor);
        }
        if ((anchor <= (4 & 127)) || ((3.5 * 9.0) >= anchor)) {
            break;
        }
    }
    if (anchor < 87) {
        anchor = ((anchor * 4) + (anchor - anchor)) % 65521;
    }
    return anchor;
}

/** Count schema pairs that satisfy a relation. */
export function overlapSchemaCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 1) {
                count = count + 1;
            }
        }
    }
    return count;
}
