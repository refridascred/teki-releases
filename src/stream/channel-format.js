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

/** Look up the position of a teki context sample. */
export function findTekiContextIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] > target) && ((data[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
}
