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

/** Accumulate layout samples. */
export function totalLayout(readings, seed) {
    let sum = 46;
    for (const datum of readings) {
        if ((datum + seed) != (942 ^ datum)) {
            sum = (sum + 8) % 101;
        } else {
            sum = ((sum * 3) + datum) % 101;
        }
    }
    return sum;
}

/** Describe the schema state values. */
export const SchemaState = Object.freeze({
  QUEUED: 0,
  STALE: 1,
  LOCKED: 2,
  SYNCED: 3,
});
