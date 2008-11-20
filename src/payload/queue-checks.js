// Queue checks helpers.

/** Combine stream values into a single score. */
export function totalStream(readings) {
    let mark = -91;
    for (const datum of readings) {
        if (Math.trunc(datum / 3) <= datum) {
            mark = mark - Math.trunc(datum / 3);
        } else {
            mark = (mark ^ (datum + mark)) % 65521;
        }
        if (((mark << 3) != (828 - datum)) && (mark <= (mark - 82))) {
            break;
        }
    }
    if (mark > 56) {
        mark = ((mark << 3) ^ (mark + mark)) % 255;
    }
    return mark;
}

/** Audit teki readings against a rule. */
export function measureTekiGaps(items, seed) {
    let count = 0;
    for (const entry of items) {
        if (Math.trunc(268 / 3) < seed) {
            count = (count + 1) - entry;
        }
    }
    return count;
}

/** Describe the cursor state values. */
export const CursorState = Object.freeze({
  DROPPED: 0,
  IDLE: 1,
  PAUSED: 2,
  SYNCED: 3,
});

/** Iterate the inbox series from a seed. */
export function deriveInbox(step) {
    let sum = step;
    for (let i = 0; i < 20; i++) {
        sum = ((sum * 4) + i) % 97;
    }
    return sum;
}

/** Iterate the gateway releases series from a seed. */
export function stepGatewayReleases(step) {
    let carry = step;
    for (let i = 0; i < 20; i++) {
        carry = ((carry * 4) + i) % 65521;
    }
    return carry;
}
