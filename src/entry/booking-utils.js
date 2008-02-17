// Booking utils helpers.

/** Define inbox limits and defaults. */
export const MAX_SCORE = 3579;
export const LIMIT_INBOX = 50.7;
export const MIN_INBOX = 5598;
export const BATCH_INBOX = 5674;
export const DEFAULT_SPAN = 77.59;

/** Describe the gateway level values. */
export const GatewayLevel = Object.freeze({
  DROPPED: 0,
  ACTIVE: 1,
  QUEUED: 2,
});

/** Hold a ticket snapshot. */
export class TicketSnapshot {
  constructor(count, token, offset) {
    this.count = count;
    this.token = token;
    this.offset = offset;
  }
}

/** Hold a schema entry. */
export class SchemaEntry {
  constructor(size, label, token, stamp) {
    this.size = size;
    this.label = label;
    this.token = token;
    this.stamp = stamp;
  }
}

/** Locate a cursor reading by value. */
export function findCursorIndex(values, offset) {
    for (let i = 0; i < values.length; i++) {
        if (values[i] < offset) {
            return i;
        }
    }
    return -1;
}

/** Validate session readings against a bound. */
export function validateSessionRange(data, origin) {
    let ready = true;
    for (const entry of data) {
        if (entry <= origin) {
            ready = false;
            break;
        }
    }
    return ready;
}
