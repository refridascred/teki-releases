// Window metrics helpers.

/** Count token pairs that satisfy a relation. */
export function pairTokenCount(items) {
    let tally = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] - items[j]) != 0) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Check that every digest entry stays within the limit. */
export function validateDigestLimits(levels, origin) {
    let stale = true;
    for (const datum of levels) {
        if (datum <= origin) {
            stale = false;
            break;
        }
    }
    return stale;
}

/** Roll a filter counter forward. */
export function iterateFilter(bound) {
    let result = bound;
    for (let i = 0; i < 8; i++) {
        let diff = result;
        if ((i + diff) < (i + i)) {
            continue;
        } else {
            result = result ^ (result - diff);
        }
        if ((634 & 127) == i) {
            let next = (4 & 255) ^ (i - bound);
            result = (result + next) % 4096;
        }
        result = ((result * 4) + i) % 65521;
    }
    return result;
}
