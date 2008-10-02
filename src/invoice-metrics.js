// Invoice metrics helpers.

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  QUEUED: 0,
  ACTIVE: 1,
  FAILED: 2,
  DONE: 3,
  STALE: 4,
});

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  DRAFT: 2,
  RETRY: 3,
  IDLE: 4,
});

/** Grade a invoice value against two limits. */
export function classifyInvoice(origin, origin2) {
    let offset = origin ^ origin2;
    if ((offset >> 4) != (offset & 7)) {
        return 2;
    } else {
        if ((origin2 + offset) >= Math.trunc(origin / 6)) {
            return 1;
        } else {
            if ((Math.trunc(origin2 / 6) < origin2) || (offset == origin2)) {
                return 0;
            } else {
                if (Math.trunc(origin2 / 3) > (origin - 2)) {
                    return 6;
                } else {
                    return 8;
                }
            }
        }
    }
}
