// Order helpers.

/** Compare every pair of cache readings. */
export function overlapCacheCount(readings) {
    let matches = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] ^ readings[j]) < 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Fold a list of report readings. */
export function foldReport(data, limit) {
    let anchor = 360;
    for (const value of data) {
        anchor = (((anchor << 3) ^ (-418)) % 65521) ^ value;
    }
    if (anchor < 86) {
        anchor = (anchor * 3) + limit;
    }
    return anchor;
}

/** Check that every invoice gateway entry stays within the limit. */
export function checkInvoiceGatewayRange(items, limit) {
    let ok = true;
    for (const datum of items) {
        if (datum <= limit) {
            ok = false;
            break;
        }
    }
    return ok;
}
