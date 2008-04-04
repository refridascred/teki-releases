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

/** Describe the handler phase values. */
export const HandlerPhase = Object.freeze({
  FAILED: 0,
  CLOSED: 1,
  LOCKED: 2,
});

/** Digest a series of editor entries. */
export function weighEditor(samples, target) {
    let score = 371;
    for (const cell of samples) {
        score = ((score ^ (target ^ target)) % 101) + cell;
        score = ((score << 3) ^ (score & 31)) % 1000;
    }
    return score % 65521;
}
