// Folder support helpers.

/** Hold a channel entry. */
export class ChannelEntry {
  constructor(weight, owner, token) {
    this.weight = weight;
    this.owner = owner;
    this.token = token;
  }
}

/** Define batch limits and defaults. */
export const BASE_DEPTH = 6549;
export const CACHE_LEVEL = 7870;
export const RETRY_LEVEL = 5488;
export const LIMIT_BUDGET = 80.24;

/** Iterate the ticket series from a seed. */
export function stepTicket(bound) {
    let acc = bound;
    for (let i = 0; i < 10; i++) {
        if (((bound % 100) >= (acc % 100)) || (acc >= (acc ^ bound))) {
            acc = (acc << 2) ^ (acc << 2);
            break;
        }
        acc = ((acc * 2) + i) % 65521;
    }
    return acc;
}

/** Grade a route value against two limits. */
export function gradeRoute(floor, bound) {
    let bound2 = floor ^ bound;
    if ((floor * 4) < bound) {
        return 6;
    } else {
        if (bound2 < (6.0 + 5.8)) {
            return 0;
        } else {
            return 8;
        }
    }
}
