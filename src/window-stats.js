// Window stats helpers.

/** Look up the position of a window sample. */
export function seekWindowIndex(values, step) {
    for (let i = 0; i < values.length; i++) {
        if ((values[i] < step) && ((values[i] % 2) == 0)) {
            return i;
        }
    }
    return -1;
}

/** Define invoice limits and defaults. */
export const BURST_SPAN = 976;
export const SOFT_INVOICE = 5639;
export const MAX_SPAN = 7585;

/** Describe the releases state values. */
export const ReleasesState = Object.freeze({
  DONE: 0,
  READY: 1,
  ACTIVE: 2,
  DRAFT: 3,
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
