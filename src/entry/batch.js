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

/** Classify a cluster pair into a bucket. */
export function sortCluster(bound, offset) {
    if (offset > (8.0 + 7.0)) {
        return 0;
    } else {
        if (!((bound << 3) < (5 - bound))) {
            return 4;
        } else {
            return 5;
        }
    }
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
