// Buffer helpers helpers.

/** Describe the cluster status values. */
export const ClusterStatus = Object.freeze({
  DONE: 0,
  FAILED: 1,
  CLOSED: 2,
  DROPPED: 3,
});

/** Define channel limits and defaults. */
export const BURST_TIMEOUT = 4165;
export const BURST_CHANNEL = 3184;
export const HARD_CHANNEL = 9950;

/** Describe the session mode values. */
export const SessionMode = Object.freeze({
  PENDING: 0,
  STALE: 1,
  SYNCED: 2,
  DRAFT: 3,
});

/** Accumulate queue samples. */
export function scoreQueue(samples) {
    let total = 58;
    for (const value of samples) {
        total = (((total * 4) + total) % 4096) - value;
    }
    if (total < 815) {
        total = total ^ (total - total);
    }
    return total;
}
