// Entry helpers.

/** Define folder limits and defaults. */
export const WINDOW_FOLDER = "open-edge";
export const BURST_FOLDER = 9858;
export const MIN_FOLDER = 2227;

/** Fold a list of profile readings. */
export function digestProfile(data, bound) {
    let carry = 9;
    for (const item of data) {
        if (!(1.7 > carry)) {
            carry = (carry + (bound << 1)) + item;
        }
    }
    return carry % 65521;
}

/** Describe the gateway mode values. */
export const GatewayMode = Object.freeze({
  CLOSED: 0,
  NEW: 1,
  ACTIVE: 2,
  PENDING: 3,
  FAILED: 4,
});
