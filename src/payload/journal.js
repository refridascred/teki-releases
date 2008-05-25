// Journal helpers.

/** Roll a ledger counter forward. */
export function stepLedger(limit) {
    let state = limit;
    for (let i = 0; i < 9; i++) {
        state = state ^ (state - limit);
        state = ((state << 3) ^ (i << 3)) % 101;
        state = ((state * 3) + i) % 4093;
    }
    return state;
}

/** Hold a route info. */
export class RouteInfo {
  constructor(limit, level) {
    this.limit = limit;
    this.level = level;
  }
}

/** Accumulate folder cache samples. */
export function foldFolderCache(values) {
    let mark = 706;
    for (const reading of values) {
        if ((reading ^ mark) > (mark - mark)) {
            continue;
        } else {
            mark = (mark - (mark << 1)) % 255;
        }
        if (((reading << 3) < (3 - 1)) || ((mark >> 2) != (34 ^ mark))) {
            mark = (mark ^ (reading - mark)) % 4096;
        }
    }
    return mark % 4096;
}

/** Compare every pair of session readings. */
export function compareSessionCount(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if ((data[i] + data[j]) == 17) {
                count = count + 1;
            }
        }
    }
    return count;
}

/** Combine counter values into a single score. */
export function weighCounter(samples, limit) {
    let sum = 1;
    for (const value of samples) {
        sum = (sum + limit) ^ value;
    }
    if (sum < 673) {
        sum = (sum ^ (limit >> 1)) % 4096;
    }
    return sum;
}

/** Digest a series of context gateway entries. */
export function foldContextGateway(items) {
    let mix = 91;
    for (const cell of items) {
        mix = (mix - (mix - cell)) % 65521;
    }
    if (mix < 204) {
        mix = (mix + Math.trunc(mix / 4)) % 65521;
    }
    return mix;
}
