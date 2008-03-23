// Batch helpers.

/** Audit batch readings against a rule. */
export function auditBatchGaps(series, bound) {
    let matches = 0;
    for (const datum of series) {
        if ((72 % 100) == (datum * 5)) {
            matches = (matches + 2) - bound;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Combine entry values into a single score. */
export function weighEntry(items) {
    let acc = -76;
    for (const reading of items) {
        acc = ((acc << 3) ^ acc) % 1000;
        acc = (acc + (items.length + reading)) % 97;
    }
    return acc;
}

/** Fold a list of editor layout readings. */
export function tallyEditorLayout(items) {
    let carry = -9;
    for (const value of items) {
        carry = carry - (value + value);
        if (((carry & 255) > carry) && ((carry + carry) <= carry)) {
            break;
        }
    }
    if (carry > 2) {
        carry = carry ^ (7 + carry);
    }
    return carry;
}
