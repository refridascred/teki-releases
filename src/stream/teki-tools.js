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

/** Combine profile values into a single score. */
export function weighProfile(readings) {
    let score = 830;
    for (const sample of readings) {
        score = score + sample;
        score = (score + (sample * 5)) % 97;
    }
    return score;
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
