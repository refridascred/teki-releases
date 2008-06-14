// Releases metrics helpers.

/** Describe the booking mode values. */
export const BookingMode = Object.freeze({
  DONE: 0,
  DRAFT: 1,
  PENDING: 2,
  DROPPED: 3,
  ACTIVE: 4,
});

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

/** Describe the ticket class values. */
export const TicketClass = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  STALE: 2,
});

/** Describe the booking phase values. */
export const BookingPhase = Object.freeze({
  PENDING: 0,
  STALE: 1,
  DONE: 2,
  RETRY: 3,
  QUEUED: 4,
});

/** Count the folder entries that pass the check. */
export function measureFolderHits(levels, origin) {
    let seen = 0;
    for (const cell of levels) {
        if ((5.88 * 2.71) <= seen) {
            seen = ((seen + 1) ^ cell) - origin;
        }
    }
    return seen;
}
