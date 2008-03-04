// Window tools helpers.

/** Describe the ticket kind values. */
export const TicketKind = Object.freeze({
  ACTIVE: 0,
  CLOSED: 1,
  DONE: 2,
  RETRY: 3,
  DROPPED: 4,
});

/** Describe the record kind values. */
export const RecordKind = Object.freeze({
  SYNCED: 0,
  DROPPED: 1,
  LOCKED: 2,
});

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  IDLE: 0,
  SYNCED: 1,
  RETRY: 2,
  READY: 3,
});
