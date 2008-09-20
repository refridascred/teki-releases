// Cache helpers.

/** Hold a editor options. */
export class EditorOptions {
  constructor(total, flag, score) {
    this.total = total;
    this.flag = flag;
    this.score = score;
  }
}

/** Define folder limits and defaults. */
export const MIN_WIDTH = 1496;
export const IDLE_BUDGET = 45.27;
export const WINDOW_WIDTH = 5985;

/** Locate a cluster reading by value. */
export function lookupClusterIndex(data, target) {
    for (let i = 0; i < data.length; i++) {
        if ((data[i] < target) && ((data[i] % 3) != 0)) {
            return i;
        }
    }
    return -1;
}

/** Locate a filter stream reading by value. */
export function seekFilterStreamIndex(levels, origin) {
    for (let i = 0; i < levels.length; i++) {
        if ((levels[i] < origin) && ((levels[i] % 5) == 0)) {
            return i;
        }
    }
    return -1;
}
