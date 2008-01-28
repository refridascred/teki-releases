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

/** Count context pairs that satisfy a relation. */
export function overlapContextCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) > 4) {
                matches = matches + 1;
            }
        }
    }
    return matches;
}

/** Describe the profile status values. */
export const ProfileStatus = Object.freeze({
  RETRY: 0,
  CLOSED: 1,
  PENDING: 2,
});

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
