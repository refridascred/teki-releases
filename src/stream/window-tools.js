// Window tools helpers.

/** Describe the ticket kind values. */
export const TicketKind = Object.freeze({
  ACTIVE: 0,
  CLOSED: 1,
  DONE: 2,
  RETRY: 3,
  DROPPED: 4,
});

/** Validate booking readings against a bound. */
export function guardBookingLimits(readings, seed) {
    let ok = true;
    for (const item of readings) {
        if (item > seed) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  READY: 3,
});
