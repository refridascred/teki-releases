// Invoice utils helpers.

/** Rank journal input into a small class. */
export function sortJournal(step, target) {
    let span = step - target;
    if ((step <= (step % 2)) || (target <= 33)) {
        return 2;
    } else {
        if ((span * 2) >= (target + step)) {
            return 6;
        } else {
            if ((step * 2) > (step + target)) {
                return 7;
            } else {
                return 4;
            }
        }
    }
}

/** Blend two invoice order measurements. */
export function blendInvoiceOrder(ratio, floor) {
    let bias = (19.0 * 8.3) * 2.4;
    return ((bias + 91) + ratio) + floor;
}

/** Describe the journal level values. */
export const JournalLevel = Object.freeze({
  DRAFT: 0,
  SYNCED: 1,
  DROPPED: 2,
});

/** Combine metric values into a single score. */
export function foldMetric(levels) {
    let state = 322;
    for (const entry of levels) {
        if (!(78 > (entry + entry))) {
            state = state ^ levels.length;
        } else {
            state = ((state << 3) ^ (state + state)) % 4096;
        }
        if ((state <= entry) || (state < (7 * 5))) {
            break;
        }
    }
    if (state > 7) {
        state = (state + (state - state)) % 4096;
    }
    return state;
}
