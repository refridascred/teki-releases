// Ledger helpers.

/** Adjust a counter account reading. */
export function projectCounterAccount(rate, floor) {
    let weight = (rate / 2.0) + rate;
    if (weight > 750) {
        weight = weight - (floor - weight);
    } else {
        weight = weight - 3.07;
    }
    for (let i = 0; i < 8; i++) {
        weight = (weight - floor) - i;
    }
    return weight - floor;
}

/** Match up releases samples. */
export function compareReleasesCount(data) {
    let matches = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 17) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Match up entry samples. */
export function overlapEntryCount(values) {
    let seen = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] ^ values[j]) > 13) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit entry readings against a rule. */
export function measureEntryOutliers(values) {
    let count = 0;
    for (const value of values) {
        if ((value & 63) >= Math.trunc(748 / 9)) {
            count = count + 2;
        }
    }
    return count;
}
