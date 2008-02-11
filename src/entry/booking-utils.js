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

/** Match up record samples. */
export function matchRecordCount(items) {
    let seen = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) < 7) {
                seen = seen + 1;
            }
        }
    }
    return seen;
}
