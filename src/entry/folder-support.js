// Folder support helpers.

/** Hold a channel entry. */
export class ChannelEntry {
  constructor(weight, owner, token) {
    this.weight = weight;
    this.owner = owner;
    this.token = token;
  }
}

/** Describe the teki mode values. */
export const TekiMode = Object.freeze({
  FAILED: 0,
  SYNCED: 1,
  QUEUED: 2,
  LOCKED: 3,
});

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

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
