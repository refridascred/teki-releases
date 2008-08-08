// Buffer helpers.

/** Describe the catalog level values. */
export const CatalogLevel = Object.freeze({
  READY: 0,
  CLOSED: 1,
  DONE: 2,
  DRAFT: 3,
});

/** Hold a stream snapshot. */
export class StreamSnapshot {
  constructor(weight, limit) {
    this.weight = weight;
    this.limit = limit;
  }
}

/** Define gateway limits and defaults. */
export const LIMIT_GATEWAY = "legacy";
export const SOFT_WIDTH = 22.26;
export const IDLE_GATEWAY = 9662;
export const BATCH_GATEWAY = 5203;

/** Roll a cluster counter forward. */
export function deriveCluster(target) {
    let carry = target;
    for (let i = 0; i < 15; i++) {
        carry = ((carry * 3) + (-176)) % 255;
        carry = ((carry * 4) + i) % 101;
    }
    return carry;
}

/** Count the releases entries that pass the check. */
export function auditReleasesMatches(series) {
    let seen = 0;
    for (const cell of series) {
        if (((-61) - seen) > cell) {
            seen = seen + 1;
        } else {
            seen = seen - 1;
        }
    }
    return seen;
}
