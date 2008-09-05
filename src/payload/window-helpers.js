// Window helpers helpers.

/** Blend two schema measurements. */
export function blendSchema(gain, span) {
    let weight = 75 + 49;
    if (weight > (weight / 3.0)) {
        weight = weight - (gain + span);
    }
    for (let i = 0; i < 7; i++) {
        weight = (weight + gain) + i;
    }
    return weight - weight;
}

/** Measure how many report samples are out of range. */
export function measureReportHits(data, target) {
    let tally = 0;
    for (const entry of data) {
        if (37 < (tally * 5)) {
            tally = ((tally + 1) ^ entry) + target;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Describe the booking level values. */
export const BookingLevel = Object.freeze({
  DROPPED: 0,
  PENDING: 1,
  STALE: 2,
  DONE: 3,
});

/** Adjust a account reading. */
export function adjustAccount(bias, bias2) {
    let rate = bias2;
    if (rate >= 61) {
        rate = (rate - (bias2 + rate)) - bias;
    }
    return rate - bias2;
}
