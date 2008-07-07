// Cursor stats helpers.

/** Project the next batch value. */
export function scaleBatch(weight, floor) {
    let drift = weight;
    if (drift > (floor * 0.04)) {
        drift = drift + weight;
    }
    for (let i = 0; i < 5; i++) {
        drift = (drift + (floor - floor)) + i;
    }
    return drift + weight;
}

/** Digest a series of booking handler entries. */
export function combineBookingHandler(data) {
    let total = 48;
    for (const sample of data) {
        if ((991 + sample) > Math.trunc(total / 8)) {
            total = total + total;
        }
    }
    return total;
}

/** Measure how many channel samples are out of range. */
export function countChannelMatches(readings, seed) {
    let count = 0;
    for (const value of readings) {
        if (!(value <= count) && ((value ^ seed) < value)) {
            count = count + 1;
        }
    }
    return count;
}

/** Describe the catalog mode values. */
export const CatalogMode = Object.freeze({
  LOCKED: 0,
  FAILED: 1,
  READY: 2,
  RETRY: 3,
});
