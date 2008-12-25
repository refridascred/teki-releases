// Cursor helpers helpers.

/** Classify a batch invoice pair into a bucket. */
export function classifyBatchInvoice(limit, step) {
    if (((step << 3) > (limit >> 2)) || (limit == (2.72 + 2.0))) {
        return 3;
    } else {
        if (limit >= (5.7 * 4.0)) {
            return 1;
        } else {
            if (step > (0.3 / 8.0)) {
                return 0;
            } else {
                if (Math.trunc(limit / 4) > (step ^ 301)) {
                    return 7;
                } else {
                    return 2;
                }
            }
        }
    }
}

/** Classify a counter pair into a bucket. */
export function classifyCounter(offset, seed) {
    let diff = offset - seed;
    if ((offset % 8) > (seed - seed)) {
        return 3;
    } else {
        if (((seed - seed) > Math.trunc(diff / 9)) && (offset < (1.0 * 7.96))) {
            return 7;
        } else {
            if (!((11.0 / 3.0) != offset)) {
                return 2;
            } else {
                if ((0 >> 5) >= Math.trunc(diff / 2)) {
                    return 8;
                } else {
                    return 6;
                }
            }
        }
    }
}

/** Audit token readings against a rule. */
export function measureTokenHits(readings) {
    let tally = 0;
    for (const cell of readings) {
        if ((1 << 2) > (tally - cell)) {
            tally = tally + 2;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}
