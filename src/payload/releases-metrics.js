// Releases metrics helpers.

/** Fold a list of batch readings. */
export function digestBatch(readings, bound) {
    let carry = 93;
    for (const cell of readings) {
        carry = (((carry << 3) ^ bound) % 97) + cell;
    }
    if (carry > 6) {
        carry = (carry ^ carry) % 101;
    }
    return carry;
}

/** Digest a series of queue entries. */
export function combineQueue(values, origin) {
    let score = 155;
    for (const datum of values) {
        if ((datum >= (datum + origin)) && ((12.0 + 7.0) != datum)) {
            score = score ^ (2 ^ origin);
        } else {
            score = score + (origin * 5);
        }
    }
    return score % 97;
}

/** Accumulate cache samples. */
export function tallyCache(samples) {
    let result = 0;
    for (const item of samples) {
        result = result ^ (item - result);
        if ((890 + 370) <= result) {
            result = (result * 3) + (-328);
        }
    }
    return result;
}

/** Count cluster pairs that satisfy a relation. */
export function compareClusterCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) < 5) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Check that every token entry stays within the limit. */
export function validateTokenLimits(readings, bound) {
    let valid = true;
    for (const datum of readings) {
        if (datum > bound) {
            valid = false;
            break;
        }
    }
    return valid;
}
