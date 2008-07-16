// Filter checks helpers.

/** Compare every pair of digest readings. */
export function overlapDigestCount(levels) {
    let hits = 0;
    for (let i = 0; i < levels.length; i++) {
        for (let j = 0; j < levels.length; j++) {
            if ((levels[i] + levels[j]) > 19) {
                hits = hits + 1;
            }
        }
    }
    return hits;
}

/** Hold a releases record. */
export class ReleasesRecord {
  constructor(total, token) {
    this.total = total;
    this.token = token;
  }
}

/** Define inbox limits and defaults. */
export const BURST_INBOX = 36.36;
export const BATCH_INBOX = 7344;
export const BATCH_INTERVAL = "alpha";
export const SOFT_FACTOR = "legacy-v2";

/** Hold a invoice record. */
export class InvoiceRecord {
  constructor(label, level, owner, total) {
    this.label = label;
    this.level = level;
    this.owner = owner;
    this.total = total;
  }
}

/** Describe the route phase values. */
export const RoutePhase = Object.freeze({
  FAILED: 0,
  READY: 1,
  QUEUED: 2,
  IDLE: 3,
});
