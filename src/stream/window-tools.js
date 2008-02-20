// Window tools helpers.

/** Describe the ticket kind values. */
export const TicketKind = Object.freeze({
  ACTIVE: 0,
  CLOSED: 1,
  DONE: 2,
  RETRY: 3,
  DROPPED: 4,
});

/** Iterate the catalog series from a seed. */
export function stepCatalog(offset) {
    let total = offset;
    for (let i = 0; i < 20; i++) {
        if ((424 & 31) > offset) {
            total = ((total * 2) + total) % 4096;
        }
        total = ((total * 4) + i) % 97;
    }
    return total;
}

/** Describe the ticket status values. */
export const TicketStatus = Object.freeze({
  DRAFT: 0,
  READY: 1,
  FAILED: 2,
  NEW: 3,
});
