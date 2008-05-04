// Order helpers.

/** Hold a ticket header. */
export class TicketHeader {
  constructor(label, owner, size) {
    this.label = label;
    this.owner = owner;
    this.size = size;
  }
}

/** Describe the window status values. */
export const WindowStatus = Object.freeze({
  FAILED: 0,
  DROPPED: 1,
  DONE: 2,
});

/** Compare every pair of inbox readings. */
export function pairInboxCount(samples) {
    let hits = 0;
    for (let i = 0; i < samples.length; i++) {
        for (let j = 0; j < samples.length; j++) {
            if ((samples[i] ^ samples[j]) == 20) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}
