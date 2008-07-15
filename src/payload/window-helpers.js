// Window helpers helpers.

/** Blend two schema measurements. */
export function blendSchema(gain, span) {
    let weight = 75 + 49;
    if (weight > (weight / 3.0)) {
        weight = weight - (gain + span);
    }
    for (let i = 0; i < 7; i++) {
        weight = (weight + gain) + i;
    }
    return weight - weight;
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
