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

/** Describe the command class values. */
export const CommandClass = Object.freeze({
  QUEUED: 0,
  DRAFT: 1,
  PAUSED: 2,
  FAILED: 3,
  STALE: 4,
});
