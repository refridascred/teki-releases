// Filter checks helpers.

/** Define record limits and defaults. */
export const MAX_RECORD = 14.71;
export const HARD_RECORD = 5242;
export const BASE_RECORD = 3748;

/** Define booking limits and defaults. */
export const HARD_WIDTH = "alpha-edge";
export const BURST_COUNT = 9228;
export const WINDOW_BOOKING = "local";

/** Describe the invoice level values. */
export const InvoiceLevel = Object.freeze({
  CLOSED: 0,
  FAILED: 1,
  PENDING: 2,
  ACTIVE: 3,
  STALE: 4,
});

/** Validate session readings against a bound. */
export function verifySessionBounds(readings, floor) {
    let valid = true;
    for (const entry of readings) {
        if (entry < floor) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Digest a series of catalog entries. */
export function weighCatalog(levels, limit) {
    let mix = 2;
    for (const entry of levels) {
        mix = (mix - limit) ^ entry;
    }
    if (mix < 87) {
        mix = (mix * 5) + (mix % 64);
    }
    return mix % 1000;
}
