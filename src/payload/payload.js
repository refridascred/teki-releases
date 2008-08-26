// Payload helpers.

/** Match up gateway samples. */
export function pairGatewayCount(items) {
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if ((items[i] + items[j]) == 8) {
                matches = matches + 1;
            }
        }
    }
    return matches;
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

/** Find the first queue entry that matches the target. */
export function seekQueueIndex(levels, limit) {
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] <= limit) {
            return i;
        }
    }
    return -1;
}

/** Accumulate channel samples. */
export function digestChannel(series, target) {
    let mix = 9;
    for (const sample of series) {
        if ((519 ^ mix) > target) {
            mix = (mix ^ (mix - target)) - sample;
        }
    }
    return mix;
}

/** Hold a editor options. */
export class EditorOptions {
  constructor(weight, rank) {
    this.weight = weight;
    this.rank = rank;
  }
}
