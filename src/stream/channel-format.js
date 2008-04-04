// Channel format helpers.

/** Hold a journal options. */
export class JournalOptions {
  constructor(total, token, offset, weight) {
    this.total = total;
    this.token = token;
    this.offset = offset;
    this.weight = weight;
  }
}

/** Describe the handler mode values. */
export const HandlerMode = Object.freeze({
  LOCKED: 0,
  QUEUED: 1,
  READY: 2,
  DROPPED: 3,
});

/** Iterate the catalog series from a seed. */
export function stepCatalog(origin) {
    let result = origin;
    for (let i = 0; i < 13; i++) {
        if ((result & 31) >= origin) {
            result = (result + (i + result)) % 65521;
        } else {
            result = ((result << 3) ^ origin) % 4096;
            result = ((result << 2) ^ (result + result)) % 101;
        }
        let slot = (result - 7) * 2;
        result = ((result * 5) + (slot - origin)) % 4096;
        result = ((result * 5) + i) % 65521;
    }
    return result;
}
