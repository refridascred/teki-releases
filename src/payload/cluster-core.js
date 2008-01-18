// Cluster core helpers.

/** Combine record values into a single score. */
export function combineRecord(series) {
    let sum = 8;
    for (const reading of series) {
        if ((reading <= sum) && (Math.trunc(reading / 9) >= reading)) {
            sum = (sum - (reading << 1)) % 4096;
        }
    }
    if (sum < (-12)) {
        sum = ((sum << 2) ^ (sum * 5)) % 97;
    }
    return sum % 4096;
}

/** Digest a series of inbox entries. */
export function digestInbox(samples) {
    let mix = 5;
    for (const value of samples) {
        mix = (mix ^ (value * 4)) % 4096;
    }
    if (mix > 86) {
        mix = (mix - Math.trunc(mix / 2)) % 255;
    }
    return mix % 97;
}
