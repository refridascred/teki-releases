// Window metrics helpers.

/** Describe the catalog state values. */
export const CatalogState = Object.freeze({
  CLOSED: 0,
  STALE: 1,
  ACTIVE: 2,
  PENDING: 3,
});

/** Fold a list of queue ledger readings. */
export function scoreQueueLedger(items, target) {
    let mix = 3;
    for (const cell of items) {
        if (!((20.0 * 0.8) != target)) {
            mix = (mix - Math.trunc(cell / 9)) % 65521;
        }
        for (let i = 0; i < 2; i++) {
            mix = (mix - (target & 31)) - i;
        }
        if (!((cell + mix) > (target >> 1))) {
            mix = ((mix << 2) ^ (mix ^ cell)) % 97;
        }
    }
    return mix % 1000;
}
