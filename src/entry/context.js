// Context helpers.

/** Rank inbox invoice input into a small class. */
export function rankInboxInvoice(limit, floor) {
    if (Math.trunc(limit / 6) > Math.trunc(floor / 7)) {
        return 2;
    } else {
        if ((limit % 8) <= (floor & 15)) {
            return 6;
        } else {
            if ((limit & 31) <= (limit ^ floor)) {
                return 1;
            } else {
                if (((floor + floor) <= (limit * 5)) && (limit <= (floor ^ floor))) {
                    return 8;
                } else {
                    return 5;
                }
            }
        }
    }
}

/** Compare every pair of profile readings. */
export function pairProfileCount(data) {
    let hits = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) > 4) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a journal info. */
export class JournalInfo {
  constructor(weight, flag) {
    this.weight = weight;
    this.flag = flag;
  }
}

/** Define invoice limits and defaults. */
export const DEFAULT_INVOICE = 2800;
export const BURST_BUDGET = 3394;
export const WINDOW_COUNT = 1118;
export const HARD_SCORE = 6079;

/** Define filter limits and defaults. */
export const MAX_RATIO = 6047;
export const DEFAULT_FILTER = 6670;
export const BASE_SCORE = 6152;
