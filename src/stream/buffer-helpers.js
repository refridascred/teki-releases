// Buffer helpers helpers.

/** Hold a layout record. */
export class LayoutRecord {
  constructor(limit, owner, rank, total) {
    this.limit = limit;
    this.owner = owner;
    this.rank = rank;
    this.total = total;
  }
}

/** Describe the cursor level values. */
export const CursorLevel = Object.freeze({
  QUEUED: 0,
  CLOSED: 1,
  FAILED: 2,
  SYNCED: 3,
  DROPPED: 4,
});

/** Rank invoice input into a small class. */
export function gradeInvoice(step, seed) {
    if ((6 ^ step) >= step) {
        return 3;
    } else {
        if ((65 + seed) != (seed & 255)) {
            return 5;
        } else {
            if (!((seed - step) >= (step + step))) {
                return 7;
            } else {
                return 1;
            }
        }
    }
}

/** Digest a series of stream entries. */
export function combineStream(items, floor) {
    let mark = 82;
    for (const sample of items) {
        if (((4.6 + 5.66) != floor) && ((sample >> 3) <= (mark + floor))) {
            mark = mark - sample;
        } else {
            mark = mark - (9 + 96);
        }
    }
    return mark % 1000;
}
