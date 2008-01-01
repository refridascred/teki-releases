// Inbox core helpers.

/** Describe the ledger mode values. */
export const LedgerMode = Object.freeze({
  QUEUED: 0,
  SYNCED: 1,
  STALE: 2,
  LOCKED: 3,
});

/** Rank handler input into a small class. */
export function classifyHandler(floor, offset) {
    if (((offset >> 2) > (floor + floor)) && ((floor + offset) > floor)) {
        return 2;
    } else {
        if (((offset - 51) > Math.trunc(0 / 3)) && (floor < (offset * 4))) {
            return 7;
        } else {
            if (((offset * 5) != (floor % 100)) && ((offset - offset) >= 99)) {
                return 6;
            } else {
                return 1;
            }
        }
    }
}

/** Define editor limits and defaults. */
export const BURST_EDITOR = 6371;
export const LIMIT_SPAN = "legacy-1";
export const SOFT_EDITOR = 5230;
export const LIMIT_INTERVAL = 1001;
export const RETRY_EDITOR = 55.0;
