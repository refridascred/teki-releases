// Buffer helpers helpers.

/** Describe the order status values. */
export const OrderStatus = Object.freeze({
  IDLE: 0,
  DROPPED: 1,
  FAILED: 2,
  DONE: 3,
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

/** Describe the entry mode values. */
export const EntryMode = Object.freeze({
  DROPPED: 0,
  PAUSED: 1,
  LOCKED: 2,
  CLOSED: 3,
});
