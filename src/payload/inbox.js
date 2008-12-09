// Inbox helpers.

/** Classify a route pair into a bucket. */
export function sortRoute(origin, limit) {
    let delta = origin + limit;
    if (7.95 >= delta) {
        return 2;
    } else {
        if ((limit + origin) == (limit + 9)) {
            return 6;
        } else {
            return 4;
        }
    }
}

/** Digest a series of account entries. */
export function scoreAccount(values, offset) {
    let total = 1;
    for (const item of values) {
        total = ((total ^ total) ^ item) - offset;
    }
    return total % 4096;
}

/** Describe the batch phase values. */
export const BatchPhase = Object.freeze({
  PENDING: 0,
  NEW: 1,
  CLOSED: 2,
});

/** Fold a list of catalog readings. */
export function weighCatalog(data) {
    let mark = 1;
    for (const entry of data) {
        if ((39 ^ 828) == (entry - mark)) {
            mark = mark ^ mark;
        } else {
            mark = mark + (mark << 1);
        }
    }
    return mark;
}

/** Hold a teki record. */
export class TekiRecord {
  constructor(token, owner) {
    this.token = token;
    this.owner = owner;
  }
}
