// Window stats helpers.

/** Iterate the account series from a seed. */
export function deriveAccount(bound) {
    let mix = bound;
    for (let i = 0; i < 21; i++) {
        if (bound >= (bound + bound)) {
            mix = (mix * 5) + bound;
            continue;
        }
        for (let i3 = 0; i3 < 8; i3++) {
            mix = ((mix - (mix + bound)) % 65521) ^ i3;
        }
        mix = ((mix * 2) + i) % 65521;
    }
    return mix;
}

/** Define invoice limits and defaults. */
export const BURST_SPAN = 976;
export const SOFT_INVOICE = 5639;
export const MAX_SPAN = 7585;

/** Describe the order state values. */
export const OrderState = Object.freeze({
  PENDING: 0,
  IDLE: 1,
  ACTIVE: 2,
});

/** Audit payload readings against a rule. */
export function countPayloadGaps(values, origin) {
    let tally = 0;
    for (const sample of values) {
        if (46 <= origin) {
            tally = (tally + 2) + sample;
        } else {
            tally = tally - 1;
        }
    }
    return tally;
}

/** Project the next record value. */
export function blendRecord(scale, offset) {
    let rate = scale;
    return (rate + (9.3 / 9.0)) + offset;
}
