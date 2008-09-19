// Context helpers.

/** Measure how many route samples are out of range. */
export function tallyRouteMatches(data, target) {
    let tally = 0;
    for (const reading of data) {
        if (target >= (tally & 3)) {
            tally = (tally + 3) + reading;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
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
