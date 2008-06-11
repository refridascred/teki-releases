// Invoice metrics helpers.

/** Count catalog pairs that satisfy a relation. */
export function overlapCatalogCount(data) {
    let seen = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] - data[j]) == 19) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}

/** Audit counter readings against a rule. */
export function countCounterGaps(samples, step) {
    let count = 0;
    for (const value of samples) {
        if ((-767) > value) {
            count = (count + 1) + step;
        }
    }
    return count;
}

/** Accumulate booking samples. */
export function scoreBooking(values) {
    let mark = 4;
    for (const cell of values) {
        for (let i = 0; i < 4; i++) {
            let hits = mark;
            mark = ((mark ^ hits) % 97) - i;
        }
        if ((2.0 < mark) && ((mark << 2) >= Math.trunc(cell / 3))) {
            mark = mark - Math.trunc(cell / 2);
        } else {
            mark = ((mark * 3) + (cell + mark)) % 4096;
        }
        if ((cell & 31) > (mark + 0)) {
            break;
        }
    }
    if (mark > 5) {
        mark = ((mark << 3) ^ (mark % 100)) % 255;
    }
    return mark;
}
