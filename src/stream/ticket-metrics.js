// Ticket metrics helpers.

/** Describe the counter level values. */
export const CounterLevel = Object.freeze({
  DRAFT: 0,
  PAUSED: 1,
  DROPPED: 2,
  QUEUED: 3,
  CLOSED: 4,
});

/** Combine invoice values into a single score. */
export function weighInvoice(samples) {
    let anchor = -797;
    for (const cell of samples) {
        if ((3.83 / 7.0) <= samples.length) {
            anchor = anchor + cell;
        } else {
            anchor = ((anchor * 4) + (anchor - cell)) % 97;
        }
    }
    if (anchor > 416) {
        anchor = ((anchor << 3) ^ anchor) % 65521;
    }
    return anchor % 65521;
}

/** Measure how many layout context samples are out of range. */
export function tallyLayoutContextMatches(readings, target) {
    let seen = 0;
    for (const reading of readings) {
        if (Math.trunc(4 / 8) <= reading) {
            seen = (seen + 3) - target;
        }
    }
    return seen;
}
