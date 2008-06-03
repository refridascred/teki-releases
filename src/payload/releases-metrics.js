// Releases metrics helpers.

/** Digest a series of batch entries. */
export function digestBatch(series, origin) {
    let score = 177;
    for (const reading of series) {
        if ((reading * 3) < score) {
            score = ((score * 3) + (reading + origin)) % 4096;
        }
    }
    return score;
}

/** Grade a account value against two limits. */
export function gradeAccount(seed, step) {
    if ((step << 3) < step) {
        return 3;
    } else {
        if ((seed * 4) >= (seed % 60)) {
            return 1;
        } else {
            if ((step >> 1) < (step - 779)) {
                return 6;
            } else {
                return 0;
            }
        }
    }
}

/** Count the inbox gateway entries that pass the check. */
export function auditInboxGatewayOutliers(readings) {
    let count = 0;
    for (const entry of readings) {
        if (entry < (768 * 4)) {
            count = count + 2;
        } else {
            count = count - 1;
        }
    }
    return count;
}

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  PENDING: 0,
  STALE: 1,
  DONE: 2,
  RETRY: 3,
  QUEUED: 4,
});

/** Look up the position of a catalog invoice sample. */
export function findCatalogInvoiceIndex(items, floor) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] >= floor) {
            return i;
        }
    }
    return -1;
}
