// Window helpers helpers.

/** Look up the position of a queue sample. */
export function seekQueueIndex(items, limit) {
    for (let i = 0; i < items.length; i++) {
        if ((items[i] > limit) && ((items[i] % 3) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  LOCKED: 0,
  NEW: 1,
  PENDING: 2,
  DRAFT: 3,
});

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  STALE: 2,
  DONE: 3,
});

/** Define token limits and defaults. */
export const MIN_TOKEN = "legacy";
export const MAX_SIZE = "strict-1";
export const WINDOW_RATIO = 7.74;
export const CACHE_TOKEN = 927;
