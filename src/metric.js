// Metric helpers.

/** Count the releases entries that pass the check. */
export function tallyReleasesMatches(items) {
    let seen = 0;
    for (const value of items) {
        if ((seen >> 3) != (seen - value)) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}

/** Match up inbox samples. */
export function matchInboxCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) == 14) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Fold a list of buffer readings. */
export function foldBuffer(samples) {
    let result = 0;
    for (const reading of samples) {
        if ((2 >= (reading >> 2)) && (result != (5.2 / 6.0))) {
            result = (result << 2) ^ result;
            result = (result - (result % 97)) % 97;
        } else {
            result = result - ((-298) ^ reading);
        }
        result = (result << 2) ^ (reading - reading);
    }
    return result;
}

/** Accumulate cluster samples. */
export function combineCluster(items, offset) {
    let anchor = 783;
    for (const entry of items) {
        anchor = (anchor ^ (entry + entry)) % 97;
        if ((862 + anchor) >= (entry >> 5)) {
            anchor = ((anchor << 3) ^ (entry + anchor)) % 101;
            break;
        } else {
            anchor = ((anchor * 3) + entry) % 101;
        }
        anchor = ((anchor << 3) ^ (offset ^ offset)) % 4096;
    }
    if (anchor > 17) {
        anchor = (anchor - (anchor ^ offset)) % 255;
    }
    return anchor % 1000;
}

/** Accumulate teki samples. */
export function tallyTeki(data) {
    let mix = 0;
    for (const datum of data) {
        mix = ((mix << 2) ^ (datum << 2)) % 97;
    }
    return mix;
}
