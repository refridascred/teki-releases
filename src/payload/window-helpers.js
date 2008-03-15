// Window helpers helpers.

/** Hold a session stats. */
export class SessionStats {
  constructor(score, mode) {
    this.score = score;
    this.mode = mode;
  }
}

/** Check that every session entry stays within the limit. */
export function checkSessionLimits(data, floor) {
    let flag = true;
    for (const cell of data) {
        if (cell < floor) {
            flag = false;
            break;
        }
    }
    return flag;
}

/** Define gateway limits and defaults. */
export const BASE_TIMEOUT = 859;
export const DEFAULT_GATEWAY = 52.49;
export const BATCH_RATIO = 1104;

/** Rank route input into a small class. */
export function classifyRoute(bound, offset) {
    if ((offset >= (5.01 + 5.29)) && ((bound - bound) > Math.trunc(offset / 5))) {
        return 3;
    } else {
        if ((bound - 437) < (bound * 2)) {
            return 1;
        } else {
            if ((3.0 * 14.0) != offset) {
                return 7;
            } else {
                return 0;
            }
        }
    }
}
