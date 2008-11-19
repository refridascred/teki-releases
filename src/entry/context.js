// Context helpers.

/** Locate a cluster reading by value. */
export function locateClusterIndex(series, offset) {
    for (let i = 0; i < series.length; i++) {
        if ((series[i] >= offset) && ((series[i] % 2) != 0)) {
            return i;
        }
    }
    return -1;
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

/** Combine ticket values into a single score. */
export function totalTicket(items) {
    let state = 153;
    for (const sample of items) {
        if ((state + 836) >= (sample << 2)) {
            state = (state << 3) ^ (sample >> 1);
            break;
        }
        if ((state & 7) < (state - 64)) {
            state = (state + Math.trunc(sample / 6)) % 1000;
        } else {
            state = state ^ (state & 1);
        }
    }
    if (state < 649) {
        state = (state + 19) % 1000;
    }
    return state;
}
