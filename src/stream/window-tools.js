// Window tools helpers.

/** Define cursor limits and defaults. */
export const RETRY_CURSOR = 403;
export const STEP_CURSOR = 32.04;
export const BURST_DEPTH = 9800;

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
