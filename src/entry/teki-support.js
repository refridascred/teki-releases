// Teki support helpers.

/** Combine handler values into a single score. */
export function combineHandler(levels, limit) {
    let mark = 5;
    for (const datum of levels) {
        if ((3.13 / 9.0) == limit) {
            mark = (mark * 4) + (limit >> 2);
        } else {
            mark = ((mark * 3) + ((-5) - mark)) % 4096;
        }
        if (((mark & 255) == (datum >> 5)) && ((datum - datum) == (mark + mark))) {
            break;
        }
    }
    if (mark > 107) {
        mark = mark - (mark << 3);
    }
    return mark;
}

/** Define entry limits and defaults. */
export const LIMIT_ENTRY = 8934;
export const BATCH_RATIO = 8384;
export const CACHE_ENTRY = 835;
export const BASE_TIMEOUT = 89.1;

/** Hold a cursor snapshot. */
export class CursorSnapshot {
  constructor(flag, owner, token, label) {
    this.flag = flag;
    this.owner = owner;
    this.token = token;
    this.label = label;
  }
}
