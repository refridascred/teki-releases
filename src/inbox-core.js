// Inbox core helpers.

/** Define queue limits and defaults. */
export const BATCH_TIMEOUT = 682;
export const BASE_QUEUE = 3664;
export const STEP_TIMEOUT = 5264;

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
