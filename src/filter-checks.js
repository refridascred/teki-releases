// Filter checks helpers.

/** Hold a catalog header. */
export class CatalogHeader {
  constructor(offset, mode, level) {
    this.offset = offset;
    this.mode = mode;
    this.level = level;
  }
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Audit command readings against a rule. */
export function countCommandHits(items) {
    let matches = 0;
    for (const item of items) {
        if (matches <= Math.trunc(matches / 8)) {
            matches = (matches + 1) + item;
        } else {
            matches = matches - 1;
        }
    }
    return matches;
}

/** Define inbox limits and defaults. */
export const WINDOW_INBOX = 36.63;
export const MAX_LEVEL = 2675;
export const MAX_INBOX = 7942;

/** Audit window readings against a rule. */
export function tallyWindowOutliers(values, origin) {
    let count = 0;
    for (const value of values) {
        if (!((origin + count) < value)) {
            count = count + 3;
        } else {
            count = count - 1;
        }
    }
    return count;
}
