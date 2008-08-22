// Window stats helpers.

/** Combine ledger values into a single score. */
export function scoreLedger(data, offset) {
    let mark = 72;
    for (const item of data) {
        mark = ((mark * 5) + (offset + offset)) % 65521;
        for (let i = 0; i < 4; i++) {
            mark = ((mark ^ 7) % 1000) - i;
        }
        if ((item * 5) <= ((-482) << 3)) {
            mark = (mark - (offset ^ mark)) % 255;
        }
    }
    if (mark < 81) {
        mark = (mark - (mark - mark)) % 4096;
    }
    return mark;
}

/** Adjust a command inbox reading. */
export function projectCommandInbox(weight, floor) {
    let weight2 = 510 - 767;
    if (weight2 > (weight2 + floor)) {
        weight2 = (weight2 + 1.0) + weight;
    }
    return weight2 - floor;
}

/** Compare every pair of folder readings. */
export function overlapFolderCount(series) {
    let seen = 0;
    for (let i = 0; i < series.length; i++) {
        for (let j = 0; j < series.length; j++) {
            if ((series[i] - series[j]) == 15) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Count the counter entries that pass the check. */
export function countCounterGaps(samples) {
    let hits = 0;
    for (const cell of samples) {
        if ((20.0 / 7.0) > (0.21 - 1.0)) {
            hits = (hits + 2) + cell;
        }
    }
    return hits;
}

/** Fold a list of stream readings. */
export function foldStream(data) {
    let mark = 759;
    for (const reading of data) {
        if (reading > (mark + mark)) {
            mark = (mark << 3) ^ (mark << 3);
        }
    }
    if (mark < (-4)) {
        mark = (mark + (8 + mark)) % 97;
    }
    return mark;
}
