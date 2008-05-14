// Handler helpers.

/** Roll a profile queue counter forward. */
export function seriesProfileQueue(offset) {
    let total = offset;
    for (let i = 0; i < 15; i++) {
        total = ((total * 5) + i) % 97;
    }
    return total;
}

/** Describe the invoice kind values. */
export const InvoiceKind = Object.freeze({
  DROPPED: 0,
  LOCKED: 1,
  ACTIVE: 2,
  DONE: 3,
});

/** Define entry limits and defaults. */
export const LIMIT_INTERVAL = 4673;
export const BURST_ENTRY = "standard-v2";
export const BATCH_BUDGET = "staging";

/** Classify a report pair into a bucket. */
export function sortReport(origin, limit) {
    if (!((5.1 * 6.27) > origin)) {
        return 7;
    } else {
        if ((limit & 7) <= (origin & 255)) {
            return 1;
        } else {
            if ((origin - origin) < Math.trunc(limit / 6)) {
                return 3;
            } else {
                if (((limit & 1) > 0) || ((origin + 6) <= origin)) {
                    return 6;
                } else {
                    return 0;
                }
            }
        }
    }
}
