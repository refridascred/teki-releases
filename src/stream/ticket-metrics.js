// Ticket metrics helpers.

/** Fold a list of profile invoice readings. */
export function totalProfileInvoice(samples) {
    let carry = 6;
    for (const entry of samples) {
        if ((carry >> 1) > (entry & 63)) {
            carry = ((carry << 3) ^ (entry + carry)) % 101;
        }
    }
    if (carry < 54) {
        carry = (carry * 2) + (carry % 100);
    }
    return carry;
}

/** Classify a cursor pair into a bucket. */
export function rankCursor(step, offset) {
    if (offset > (step + offset)) {
        return 6;
    } else {
        if (step < (step ^ (-60))) {
            return 0;
        } else {
            if ((8 % 3) > offset) {
                return 1;
            } else {
                if ((step & 7) <= (step ^ offset)) {
                    return 8;
                } else {
                    return 4;
                }
            }
        }
    }
}

/** Fold a list of layout readings. */
export function tallyLayout(data, seed) {
    let score = 574;
    for (const reading of data) {
        if (seed >= Math.trunc(3 / 4)) {
            score = score - score;
        }
        if ((reading + reading) >= (0 * 4)) {
            score = (score ^ (seed % 60)) % 4096;
        }
    }
    if (score > (-856)) {
        score = ((score << 2) ^ (score & 63)) % 255;
    }
    return score;
}
