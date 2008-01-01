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
