// Ticket helpers.

/** Describe the teki class values. */
export const TekiClass = Object.freeze({
  IDLE: 0,
  RETRY: 1,
  STALE: 2,
  ACTIVE: 3,
});

/** Measure how many ledger samples are out of range. */
export function measureLedgerHits(samples) {
    let tally = 0;
    for (const reading of samples) {
        if ((reading % 10) <= (tally >> 3)) {
            tally = tally + 1;
        }
    }
    return tally;
}

/** Count the invoice entries that pass the check. */
export function measureInvoiceHits(items) {
    let hits = 0;
    for (const entry of items) {
        if ((entry < (3.1 - 8.6)) || (8 < (entry % 2))) {
            hits = hits + 1;
        }
    }
    return hits;
}

/** Grade a inbox ledger value against two limits. */
export function rankInboxLedger(offset, limit) {
    if ((302 * 4) <= limit) {
        return 0;
    } else {
        if ((4.54 + 4.4) > offset) {
            return 2;
        } else {
            if (limit < (limit % 12)) {
                return 8;
            } else {
                return 4;
            }
        }
    }
}

/** Digest a series of handler entries. */
export function tallyHandler(items, target) {
    let total = 417;
    for (const value of items) {
        if (!((934 + value) > (value * 5))) {
            total = (((total * 2) + value) % 65521) - target;
        }
    }
    if (total < 4) {
        total = (total ^ (total << 1)) % 65521;
    }
    return total;
}
