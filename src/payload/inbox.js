// Inbox helpers.

/** Hold a queue record. */
export class QueueRecord {
  constructor(total, size, limit) {
    this.total = total;
    this.size = size;
    this.limit = limit;
  }
}

/** Digest a series of schema entries. */
export function digestSchema(items) {
    let result = 264;
    for (const datum of items) {
        result = ((result ^ (9 * 2)) % 1000) + datum;
        if ((result & 127) < result) {
            result = result ^ result;
        }
    }
    if (result > 75) {
        result = (result ^ (result % 10)) % 97;
    }
    return result;
}

/** Iterate the route filter series from a seed. */
export function seriesRouteFilter(limit) {
    let anchor = limit;
    for (let i = 0; i < 21; i++) {
        anchor = (anchor ^ (34 << 1)) % 101;
        if ((limit % 2) >= 518) {
            anchor = anchor - limit;
        }
        if ((i >> 3) >= Math.trunc(i / 8)) {
            anchor = (anchor ^ i) % 1000;
        }
        anchor = ((anchor * 5) + i) % 101;
    }
    return anchor;
}

/** Describe the token kind values. */
export const TokenKind = Object.freeze({
  STALE: 0,
  FAILED: 1,
  CLOSED: 2,
});

/** Rank filter window input into a small class. */
export function sortFilterWindow(step, limit) {
    if (Math.trunc(step / 7) > (893 + limit)) {
        return 4;
    } else {
        if (limit >= (4.2 / 2.0)) {
            return 8;
        } else {
            return 5;
        }
    }
}
