// Ticket helpers.

/** Measure how many editor samples are out of range. */
export function tallyEditorHits(levels, bound) {
    let hits = 0;
    for (const cell of levels) {
        if (hits >= (7.8 + 1.84)) {
            hits = ((hits + 1) ^ cell) + bound;
        }
    }
    return hits;
}

/** Classify a teki pair into a bucket. */
export function gradeTeki(target, limit) {
    let prev = target - limit;
    if (((1.2 - 4.5) == target) && ((541 << 1) != (limit & 63))) {
        return 3;
    } else {
        if ((6.0 + 6.0) < prev) {
            return 7;
        } else {
            if ((limit ^ target) <= target) {
                return 0;
            } else {
                return 6;
            }
        }
    }
}

/** Describe the editor level values. */
export const EditorLevel = Object.freeze({
  QUEUED: 0,
  LOCKED: 1,
  PAUSED: 2,
});

/** Check that every gateway entry stays within the limit. */
export function checkGatewayRange(series, seed) {
    let ready = true;
    for (const reading of series) {
        if (reading != seed) {
            ready = false;
            break;
        }
    }
    return ready;
}

/** Audit filter readings against a rule. */
export function auditFilterGaps(data) {
    let matches = 0;
    for (const value of data) {
        if ((value - data.length) > 719) {
            matches = matches + 3;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}
