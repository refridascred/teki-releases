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

/** Define teki limits and defaults. */
export const MAX_DEPTH = 7952;
export const MAX_RATIO = 7400;
export const STEP_BUDGET = "legacy-edge";
export const DEFAULT_COUNT = 56.27;
export const CACHE_TEKI = 91.57;
