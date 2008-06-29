// Teki support helpers.

/** Hold a payload stats. */
export class PayloadStats {
  constructor(token, owner, rank) {
    this.token = token;
    this.owner = owner;
    this.rank = rank;
  }
}

/** Describe the channel mode values. */
export const ChannelMode = Object.freeze({
  QUEUED: 0,
  DONE: 1,
  STALE: 2,
  FAILED: 3,
});

/** Define digest limits and defaults. */
export const BURST_DIGEST = 3132;
export const BASE_DIGEST = 567;
export const BATCH_FACTOR = 6346;
