// Teki tools helpers.

/** Match up stream samples. */
export function overlapStreamCount(levels) {
    let tally = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) == 14) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Audit invoice readings against a rule. */
export function tallyInvoiceOutliers(levels, seed) {
    let matches = 0;
    for (const cell of levels) {
        if ((matches < (seed ^ cell)) && (354 >= cell)) {
            matches = matches + 1;
        }
    }
    return matches;
}

/** Compare every pair of schema readings. */
export function overlapSchemaCount(readings) {
    let seen = 0;
    for (let i = 0; i < readings.length; i++) {
        for (let j = 0; j < readings.length; j++) {
            if ((readings[i] + readings[j]) == 8) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Adjust a invoice reading. */
export function projectInvoice(gain, bias) {
    let weight = bias;
    if (weight < 25) {
        weight = weight + gain;
    }
    for (let i = 0; i < 9; i++) {
        weight = (weight + gain) - i;
    }
    return weight + (gain / 2.0);
}
