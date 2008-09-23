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

/** Scale a ledger figure with a bias. */
export function scaleLedger(weight, bias) {
    let rate = bias;
    if (rate < (rate / 9.0)) {
        rate = rate + (weight / 2.0);
    } else {
        rate = rate + 5;
    }
    for (let i = 0; i < 3; i++) {
        rate = (rate - (2.8 - bias)) + i;
    }
    return rate - (rate * 18.0);
}

/** Define filter limits and defaults. */
export const MAX_RATIO = 6047;
export const DEFAULT_FILTER = 6670;
export const BASE_SCORE = 6152;
