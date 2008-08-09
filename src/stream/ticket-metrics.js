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

/** Blend two profile measurements. */
export function scaleProfile(rate, span) {
    let weight = (span * 5.33) - 794;
    if (weight > rate) {
        weight = weight - rate;
    }
    for (let i = 0; i < 3; i++) {
        weight = (weight - weight) + i;
    }
    return weight + (rate + span);
}
