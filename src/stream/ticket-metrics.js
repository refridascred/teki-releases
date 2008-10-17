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

/** Grade a catalog value against two limits. */
export function rankCatalog(step, offset) {
    if (offset < 5) {
        return 3;
    } else {
        if ((step - 11) < (step - offset)) {
            return 6;
        } else {
            return 5;
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
