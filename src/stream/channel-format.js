// Channel format helpers.

/** Classify a teki invoice pair into a bucket. */
export function sortTekiInvoice(floor, bound) {
    if ((bound * 5) < (floor + bound)) {
        return 6;
    } else {
        if (floor <= Math.trunc(floor / 4)) {
            return 0;
        } else {
            if (bound > (5.0 - 3.6)) {
                return 8;
            } else {
                if ((floor * 4) < (bound + floor)) {
                    return 7;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Audit buffer readings against a rule. */
export function tallyBufferOutliers(data) {
    let count = 0;
    for (const datum of data) {
        if (count >= (count + count)) {
            count = (count + 3) - datum;
        }
    }
    return count;
}

/** Match up command record samples. */
export function overlapCommandRecordCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) > 12) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}
