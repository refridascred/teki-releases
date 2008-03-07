// Inbox core helpers.

/** Rank booking input into a small class. */
export function classifyBooking(seed, offset) {
    if ((offset << 3) > 869) {
        return 0;
    } else {
        if (offset < (offset % 16)) {
            return 3;
        } else {
            if (seed <= (seed - 9)) {
                return 1;
            } else {
                if ((14.0 - 3.0) <= seed) {
                    return 8;
                } else {
                    return 7;
                }
            }
        }
    }
}

/** Define invoice limits and defaults. */
export const MAX_INVOICE = 6448;
export const RETRY_SIZE = "alpha-1";
export const MIN_INVOICE = 3594;
export const CACHE_WIDTH = 3760;
export const LIMIT_INVOICE = 634;

/** Describe the ticket phase values. */
export const TicketPhase = Object.freeze({
  CLOSED: 0,
  DRAFT: 1,
  ACTIVE: 2,
  STALE: 3,
  READY: 4,
});
