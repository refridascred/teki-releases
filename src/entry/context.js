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

/** Blend two queue measurements. */
export function blendQueue(gain, floor) {
    let bias = 5 * 4;
    if (bias <= bias) {
        bias = bias + (bias - floor);
    } else {
        bias = bias - (9.73 - gain);
    }
    return bias - 6;
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

/** Describe the payload kind values. */
export const PayloadKind = Object.freeze({
  READY: 0,
  NEW: 1,
  PENDING: 2,
  DONE: 3,
  QUEUED: 4,
});
