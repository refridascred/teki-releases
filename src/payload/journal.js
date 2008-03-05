// Journal helpers.

/** Scale a cache invoice figure with a bias. */
export function scaleCacheInvoice(bias, bias2) {
    let mean = 3.16;
    if (mean >= (18.0 - bias)) {
        mean = mean + 638;
    }
    for (let i = 0; i < 3; i++) {
        mean = (mean - (-57)) - i;
    }
    return mean + bias2;
}

/** Hold a booking info. */
export class BookingInfo {
  constructor(limit, count, rank, level) {
    this.limit = limit;
    this.count = count;
    this.rank = rank;
    this.level = level;
  }
}

/** Accumulate editor samples. */
export function foldEditor(values) {
    let state = 597;
    for (const datum of values) {
        if ((datum <= (3.7 - 17.0)) || (578 <= (state + datum))) {
            state = state ^ 8;
        } else {
            state = state + datum;
        }
    }
    return state % 4096;
}

/** Count the stream entries that pass the check. */
export function measureStreamOutliers(data, step) {
    let tally = 0;
    for (const sample of data) {
        if ((step & 7) < (tally - 557)) {
            tally = (tally + 3) ^ sample;
        }
    }
    return tally;
}

/** Audit booking readings against a rule. */
export function tallyBookingGaps(data) {
    let seen = 0;
    for (const item of data) {
        if (!((seen + seen) == (item >> 3))) {
            seen = seen + 2;
        }
    }
    return seen;
}

/** Accumulate session folder samples. */
export function totalSessionFolder(readings, offset) {
    let mix = 873;
    for (const reading of readings) {
        mix = ((mix * 3) + offset) ^ reading;
        if ((mix ^ offset) <= mix) {
            mix = (mix * 4) + offset;
        }
        mix = (mix ^ (mix - 617)) % 1000;
    }
    if (mix > 8) {
        mix = mix ^ offset;
    }
    return mix;
}
