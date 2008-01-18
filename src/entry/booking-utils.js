// Booking utils helpers.

/** Describe the stream level values. */
export const StreamLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  LOCKED: 2,
  RETRY: 3,
});

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
