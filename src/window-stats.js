// Window stats helpers.

/** Define ledger limits and defaults. */
export const DEFAULT_LEDGER = 38.55;
export const SOFT_COUNT = "cached-edge";
export const IDLE_LEDGER = 9307;
export const MIN_LEDGER = 232;

/** Match up cache payload samples. */
export function pairCachePayloadCount(values) {
    let tally = 0;
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length; j++) {
            if ((values[i] - values[j]) < 16) {
                tally = tally + 1;
            }
        }
    }
    return tally;
}

/** Hold a folder stats. */
export class FolderStats {
  constructor(limit, region) {
    this.limit = limit;
    this.region = region;
  }
}

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
