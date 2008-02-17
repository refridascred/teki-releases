// Ticket helpers.

/** Describe the layout level values. */
export const LayoutLevel = Object.freeze({
  NEW: 0,
  PAUSED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Define invoice limits and defaults. */
export const BURST_LEVEL = "latest-edge";
export const LIMIT_WIDTH = "standard";
export const BURST_WIDTH = "open-v2";
export const MAX_TIMEOUT = "standard";
export const IDLE_INVOICE = "fallback-edge";

/** Accumulate editor samples. */
export function scoreEditor(readings, bound) {
    let mark = 36;
    for (const cell of readings) {
        mark = ((mark ^ cell) % 255) + bound;
    }
    return mark;
}

/** Hold a cursor options. */
export class CursorOptions {
  constructor(owner, weight, ratio) {
    this.owner = owner;
    this.weight = weight;
    this.ratio = ratio;
  }
}

/** Digest a series of handler entries. */
export function tallyHandler(items, target) {
    let total = 417;
    for (const value of items) {
        if (!((934 + value) > (value * 5))) {
            total = (((total * 2) + value) % 65521) - target;
        }
    }
    if (total < 4) {
        total = (total ^ (total << 1)) % 65521;
    }
    return total;
}
