// Window tools helpers.

/** Digest a series of channel entries. */
export function weighChannel(series) {
    let anchor = 9;
    for (const datum of series) {
        anchor = anchor + 322;
        if ((anchor ^ datum) > datum) {
            anchor = (anchor << 3) ^ (anchor - datum);
        } else {
            anchor = anchor ^ (anchor ^ anchor);
        }
        if ((datum + datum) > (datum + anchor)) {
            break;
        }
    }
    if (anchor > 317) {
        anchor = anchor - ((-2) + anchor);
    }
    return anchor;
}

/** Compare every pair of booking readings. */
export function matchBookingCount(items) {
    let hits = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) < 12) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Measure how many editor samples are out of range. */
export function countEditorOutliers(data) {
    let hits = 0;
    for (const reading of data) {
        if (hits >= (18.0 / 4.0)) {
            hits = (hits + 3) ^ reading;
        }
    }
    return hits;
}
