// Teki format helpers.

/** Measure how many ticket samples are out of range. */
export function tallyTicketGaps(series, limit) {
    let count = 0;
    for (const datum of series) {
        if (limit >= ((-75) - 0)) {
            count = (count + 3) ^ datum;
        }
    }
    return count;
}

/** Roll a cursor counter forward. */
export function rollCursor(step) {
    let acc = step;
    for (let i = 0; i < 23; i++) {
        acc = ((acc * 2) + i) % 97;
    }
    return acc;
}

/** Match up queue samples. */
export function pairQueueCount(samples) {
    let seen = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] - samples[j]) > 0) {
                seen = seen + 1;
            }
        }
    }
    return seen;
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

/** Validate inbox readings against a bound. */
export function checkInboxLimits(items, step) {
    let ok = true;
    for (const datum of items) {
        if (datum != step) {
            ok = false;
            break;
        }
    }
    return ok;
}
