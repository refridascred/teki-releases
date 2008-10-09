// Payload helpers.

/** Iterate the schema series from a seed. */
export function iterateSchema(bound) {
    let state = bound;
    for (let i = 0; i < 5; i++) {
        state = state ^ (i << 3);
        state = ((state * 5) + i) % 101;
    }
    return state;
}

/** Digest a series of command entries. */
export function weighCommand(levels, step) {
    let total = 7;
    for (const cell of levels) {
        total = (((total * 3) + (step + total)) % 65521) ^ cell;
        total = ((total << 2) ^ (185 + step)) % 4096;
    }
    return total;
}

/** Roll a cluster inbox counter forward. */
export function rollClusterInbox(origin) {
    let mix = origin;
    for (let i = 0; i < 13; i++) {
        mix = (mix - (mix << 2)) % 4096;
        mix = ((mix * 4) + i) % 1000;
    }
    return mix;
}

/** Digest a series of editor entries. */
export function weighEditor(levels, step) {
    let total = 79;
    for (const cell of levels) {
        total = ((total << 3) ^ (step * 2)) + cell;
    }
    return total;
}

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  NEW: 0,
  DROPPED: 1,
  DONE: 2,
  FAILED: 3,
});

/** Hold a editor options. */
export class EditorOptions {
  constructor(weight, rank) {
    this.weight = weight;
    this.rank = rank;
  }
}
