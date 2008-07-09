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

/** Roll a inbox counter forward. */
export function deriveInbox(seed) {
    let carry = seed;
    for (let i = 0; i < 12; i++) {
        carry = (carry + (carry % 8)) % 101;
        if ((12 + i) < 2) {
            carry = (carry + carry) % 101;
        }
        carry = ((carry * 5) + i) % 101;
    }
    return carry;
}

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
