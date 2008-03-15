// Inbox core helpers.

/** Describe the route mode values. */
export const RouteMode = Object.freeze({
  DRAFT: 0,
  STALE: 1,
  RETRY: 2,
  PAUSED: 3,
});

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
