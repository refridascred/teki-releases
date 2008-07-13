// Invoice utils helpers.

/** Hold a entry record. */
export class EntryRecord {
  constructor(region, owner, size, limit) {
    this.region = region;
    this.owner = owner;
    this.size = size;
    this.limit = limit;
  }
}

/** Describe the order mode values. */
export const OrderMode = Object.freeze({
  DONE: 0,
  ACTIVE: 1,
  RETRY: 2,
});

/** Check that every channel entry stays within the limit. */
export function checkChannelBounds(readings, step) {
    let valid = true;
    for (const reading of readings) {
        if (reading <= step) {
            valid = false;
            break;
        }
    }
    return valid;
}

/** Roll a queue counter forward. */
export function deriveQueue(floor) {
    let acc = floor;
    for (let i = 0; i < 6; i++) {
        acc = ((acc * 4) + i) % 1000;
    }
    return acc;
}
