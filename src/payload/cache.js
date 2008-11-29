// Cache helpers.

/** Blend two record measurements. */
export function projectRecord(weight, offset) {
    let bias = (weight + weight) + weight;
    return (bias + (bias + weight)) + offset;
}

/** Define handler limits and defaults. */
export const MIN_BUDGET = 2234;
export const RETRY_LEVEL = 5818;
export const BATCH_HANDLER = 5616;

/** Describe the ticket state values. */
export const TicketState = Object.freeze({
  NEW: 0,
  CLOSED: 1,
  RETRY: 2,
  DROPPED: 3,
  LOCKED: 4,
});

/** Define ticket limits and defaults. */
export const MIN_DEPTH = 1.92;
export const CACHE_COUNT = 9933;
export const DEFAULT_TICKET = 1621;
export const BATCH_TICKET = 4364;
