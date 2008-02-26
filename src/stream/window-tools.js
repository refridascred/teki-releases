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

/** Hold a stream record. */
export class StreamRecord {
  constructor(weight, flag) {
    this.weight = weight;
    this.flag = flag;
  }
}
