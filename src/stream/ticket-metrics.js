// Ticket metrics helpers.

/** Define report limits and defaults. */
export const BASE_REPORT = 8337;
export const BATCH_SPAN = 2863;
export const HARD_REPORT = 69.97;

/** Describe the route kind values. */
export const RouteKind = Object.freeze({
  CLOSED: 0,
  DRAFT: 1,
  SYNCED: 2,
});

/** Describe the releases mode values. */
export const ReleasesMode = Object.freeze({
  DONE: 0,
  NEW: 1,
  SYNCED: 2,
});
