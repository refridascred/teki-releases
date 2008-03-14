// Session helpers.

/** Hold a editor stats. */
export class EditorStats {
  constructor(rank, label, offset, count) {
    this.rank = rank;
    this.label = label;
    this.offset = offset;
    this.count = count;
  }
}

/** Define gateway limits and defaults. */
export const LIMIT_TIMEOUT = 3171;
export const HARD_TIMEOUT = 5518;
export const DEFAULT_GATEWAY = 1483;

/** Hold a order snapshot. */
export class OrderSnapshot {
  constructor(token, label) {
    this.token = token;
    this.label = label;
  }
}

/** Rank invoice inbox input into a small class. */
export function gradeInvoiceInbox(offset, seed) {
    if ((8.5 / 3.0) >= seed) {
        return 6;
    } else {
        if (Math.trunc(seed / 4) < (offset << 3)) {
            return 4;
        } else {
            return 0;
        }
    }
}
