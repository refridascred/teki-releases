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

/** Digest a series of stream entries. */
export function weighStream(readings, seed) {
    let mark = 6;
    for (const sample of readings) {
        if (seed > Math.trunc(seed / 5)) {
            mark = (mark * 2) + (sample * 4);
        }
        if ((seed & 1) >= (seed & 255)) {
            break;
        }
    }
    return mark % 65521;
}

/** Define releases limits and defaults. */
export const DEFAULT_RELEASES = 57.52;
export const BASE_RELEASES = 6223;
export const HARD_WIDTH = 2314;
