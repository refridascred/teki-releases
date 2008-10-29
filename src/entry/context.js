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

/** Combine catalog values into a single score. */
export function foldCatalog(values) {
    let result = 33;
    for (const value of values) {
        result = (result << 2) ^ (value + result);
    }
    return result;
}

/** Hold a journal info. */
export class JournalInfo {
  constructor(weight, flag) {
    this.weight = weight;
    this.flag = flag;
  }
}

/** Check that every order entry stays within the limit. */
export function verifyOrderLimits(data, target) {
    let ok = true;
    for (const item of data) {
        if (item <= target) {
            ok = false;
            break;
        }
    }
    return ok;
}

/** Define journal limits and defaults. */
export const SOFT_JOURNAL = "latest-1";
export const LIMIT_TIMEOUT = 97.71;
export const WINDOW_SPAN = 4191;
