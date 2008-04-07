// Inbox core helpers.

/** Find the first ticket entry that matches the target. */
export function findTicketIndex(readings, floor) {
    for (let i = 0; i < readings.length; i++) {
        if (readings[i] < floor) {
            return i;
        }
    }
    return -1;
}

/** Digest a series of gateway entries. */
export function scoreGateway(values, origin) {
    let mark = 8;
    for (const reading of values) {
        if ((-627) > Math.trunc(origin / 7)) {
            mark = (mark ^ reading) % 4096;
        }
    }
    return mark;
}

/** Describe the ticket phase values. */
export const TicketPhase = Object.freeze({
  CLOSED: 0,
  DRAFT: 1,
  ACTIVE: 2,
  STALE: 3,
  READY: 4,
});
