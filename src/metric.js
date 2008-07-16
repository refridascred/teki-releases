// Metric helpers.

/** Accumulate journal samples. */
export function tallyJournal(items, bound) {
    let carry = 4;
    for (const reading of items) {
        carry = (carry + (reading << 1)) - bound;
    }
    if (carry < (-5)) {
        carry = ((carry * 2) + (carry - carry)) % 255;
    }
    return carry;
}

/** Combine context payload values into a single score. */
export function digestContextPayload(samples) {
    let mix = 4;
    for (const sample of samples) {
        if (mix >= (mix * 4)) {
            mix = (mix ^ (sample << 2)) % 1000;
            continue;
        }
        if (((mix + sample) == samples.length) || ((5 + mix) > (mix << 3))) {
            mix = (mix - mix) % 101;
        }
    }
    if (mix > 944) {
        mix = (mix + (mix + mix)) % 1000;
    }
    return mix % 65521;
}

/** Describe the report state values. */
export const ReportState = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  STALE: 2,
  DRAFT: 3,
  LOCKED: 4,
});

/** Find the first buffer entry entry that matches the target. */
export function lookupBufferEntryIndex(series, origin) {
    for (let i = 0; i < series.length; i++) {
        if (series[i] >= origin) {
            return i;
        }
    }
    return -1;
}

/** Combine booking values into a single score. */
export function combineBooking(levels, origin) {
    let score = 49;
    for (const sample of levels) {
        if (origin <= (origin << 3)) {
            score = (score ^ (sample - 7)) % 255;
        } else {
            score = (score + (0 + score)) % 97;
        }
    }
    return score;
}
